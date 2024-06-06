
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
import { Budget, BudgetDocument} from '../entities/budget.entity';
import { Category, CategoryDocument } from '../categories/entities/category.entity';
import { ShareReport } from 'src/entities/share-report.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name)
    private readonly model: Model<TransactionDocument>,
    @InjectModel(Wallet.name)
    private readonly walletModel: Model<WalletDocument>,
    @InjectModel(Budget.name)
    private readonly budgetModel: Model<BudgetDocument>,
    @InjectModel(Category.name)
    private readonly categoryModel: Model<CategoryDocument>,
    @InjectModel('ShareReport') private readonly shareReportModel: Model<ShareReport>,
  ) {}
  async create(_id:string, createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    if(createTransactionDto.type === true){
      const wallet= await this.walletModel.findOneAndUpdate(
        { _id: createTransactionDto.walletRef },
      {
        $inc: {
          Balance: createTransactionDto.money
        }
      },
        { new: true }
      ).exec();
    }
    else {
      const categories = await this.categoryModel.findOne({ _id: createTransactionDto.categoriesRef }).exec();
      const budget= await this.budgetModel.findOne({categories:categories.name}).exec();
      if(budget){
        const budget= await this.budgetModel.findOneAndUpdate(
          {categories:categories.name},
          {
            $inc: {
              money_spend: createTransactionDto.money
            }
          },
        ).exec();
      }
    }
    const categories = await this.categoryModel.findOne({ _id: createTransactionDto.categoriesRef }).exec();
    return new this.model({
      ...createTransactionDto,
      nameCategory: categories.name,
      userRef: _id,
      createdAt: new Date(),
      updatedAt: new Date(),
    }).save();
  }

  async findAll(_id: string): Promise<Transaction[]> {
    const listTransaction= this.model.find({ userRef: _id }).sort({dateCreated:-1}).exec();
    return listTransaction;
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
  async remove(id: string): Promise<Transaction> {
    return await this.model.findOneAndUpdate({ _id: id }, { isDeleted: true },{new: true}).exec();
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
    const fixedBalance = wallet?.fixedBalance
    return {fixedBalance, balance, report};
  }


  async getShareReport(userRef: string,month: number, year: number ): Promise<ShareReport> {
    return await this.shareReportModel.findOne({ userRef, month, year, shareflag:'true' }).exec()
  }

  async setShareReport(userRef: string, month: number, year: number) {
    const report = await this.shareReportModel.findOne({ userRef, month, year }).exec()
    report.shareflag = true
    await report.save()
    return 'Shared successfully'
  }
  async getMonthlyReportOutcome(userRef: string,month: number, year: number): Promise<any> {
    const startOfMonth = new Date(year, month - 1, 1);
    const endOfMonth = new Date(year, month, 0);

    // console.log(userRef,startOfMonth,endOfMonth)
    const existingReport = await this.shareReportModel.findOne({ userRef, month, year }).exec();
    if (existingReport) {
      return existingReport;
    }

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


    const shareReport = new this.shareReportModel({
      userRef,
      month,
      year,
      totalOutcome,
      averageDailyOutcome,
      shareflag: false,
      transactions,
    });

    await shareReport.save();

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
