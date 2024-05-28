
import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Transaction,
  TransactionDocument,
} from './entities/transaction.entity';
import { Wallet, WalletDocument } from 'src/wallets/entities/wallet.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name)
    private readonly model: Model<TransactionDocument>,
    @InjectModel(Wallet.name)
    private readonly walletModel : Model<WalletDocument>,
  ) {}
  async create(_id:string, createTransactionDto: CreateTransactionDto): Promise<Transaction> {

    return new this.model({
      ...createTransactionDto,
      userRef: _id,
      createdAt: new Date(),
    }).save();
  }

  async findAll(): Promise<Transaction[]> {
    return this.model.find().exec();
  }

  async findByCategory(categories: String): Promise<Transaction> {
    return await this.model.findOne({ categories: categories }).exec();
  }

  async findByDate(date: string): Promise<Transaction> {
    const parsedDate = new Date(date); // Parse the string to a Date object
    return await this.model.findOne({ createAt: parsedDate }).exec();
  }

  async update(
    updateTransactionDto: UpdateTransactionDto,
  ): Promise<Transaction> {
    return await this.model
      .findOneAndUpdate({
        ...updateTransactionDto,
        createdAt: new Date(),
      })
      .exec();
  }
  async remove(id: number): Promise<Transaction> {
    return await this.model.findByIdAndDelete(id).exec();
  }

  async getMonthlyReport(userRef: string,month: number, year: number): Promise<any> {
    const startOfMonth = new Date(year, month - 1, 1);
    const endOfMonth = new Date(year, month, 0);

    // console.log(userRef,startOfMonth,endOfMonth)

    const transactions = await this.model.find({
      userRef: userRef,
      createdAt: {
        $gte: startOfMonth,
        $lt: endOfMonth,
      },
    });

    console.log(transactions)
    const wallet = await this.walletModel.findOne({ userRef: userRef });
    const report = transactions.reduce((acc, transaction) => {
      const date = new Date(transaction.createdAt);

      let period: string;
      if (date.getDate() <= 3) period = 'Period 1';
      else if (date.getDate() <= 10) period = 'Period 2';
      else if (date.getDate() <= 17) period = 'Period 3';
      else if (date.getDate() <= 24) period = 'Period 4';
      else period = 'Period 5';

      if (!acc[period]) acc[period] = { income: 0, outcome: 0 };

      if (transaction.type) {
        acc[period].income += transaction.money;
      } else {
        acc[period].outcome += transaction.money;
      }
      // console.log(acc)
      return acc;
    }, {});

    const balance = wallet?.Balance
    return {balance, report};
  }

  async getMonthlyReportOutcome(userRef: string,month: number, year: number): Promise<any> {
    const startOfMonth = new Date(year, month - 1, 1);
    const endOfMonth = new Date(year, month, 0);

    // console.log(userRef,startOfMonth,endOfMonth)

    const transactions = await this.model.find({
      userRef: userRef,
      createdAt: {
        $gte: startOfMonth,
        $lt: endOfMonth,
      },
      type: false,
    });
    const totalOutcome = transactions.reduce((total, transaction) => total + transaction.money, 0);
    const totalDays = (endOfMonth.getDate() - startOfMonth.getDate()) + 1;
    const averageDailyOutcome = totalOutcome / totalDays;

    return { totalOutcome, averageDailyOutcome,transactions };
  }

  async getMonthlyReportIncome(userRef: string,month: number, year: number): Promise<any> {
    const startOfMonth = new Date(year, month - 1, 1);
    const endOfMonth = new Date(year, month, 0);

    // console.log(userRef,startOfMonth,endOfMonth)

    const transactions = await this.model.find({
      userRef: userRef,
      createdAt: {
        $gte: startOfMonth,
        $lt: endOfMonth
      },
      type: true,
    });
    const totalIncome = transactions.reduce((total, transaction) => total + transaction.money, 0);

    return { totalIncome,transactions };
  }
}
