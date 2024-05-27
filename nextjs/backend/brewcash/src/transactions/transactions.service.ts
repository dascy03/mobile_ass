
import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Transaction,
  TransactionDocument,
} from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name)
    private readonly model: Model<TransactionDocument>,
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
}
