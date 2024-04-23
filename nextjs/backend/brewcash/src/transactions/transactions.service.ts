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
  async create(
    createTransactionDto: CreateTransactionDto,
  ): Promise<Transaction> {
    return await new this.model({
      ...createTransactionDto,
      createdAt: new Date(),
    }).save();
  }

  async findAll(): Promise<Transaction[]> {
    return this.model.find().exec();
  }

  async findByCategory(categories: String): Promise<Transaction[]> {
    return await this.model.find({ categories: categories }).exec();
  }

  async findByDate(date: string): Promise<Transaction[]> {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0); // Đặt giờ, phút, giây và millisecond về 00:00:00:00
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999); // Đặt giờ, phút, giây và millisecond về 23:59:59:999

    return await this.model
      .find({
        createAt: {
          $gte: startOfDay,
          $lte: endOfDay,
        },
      })
      .exec();
  }

  async remove(id: string): Promise<Transaction> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
