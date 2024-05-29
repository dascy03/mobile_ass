
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
}
