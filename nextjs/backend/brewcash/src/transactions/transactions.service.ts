import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction, TransactionDocument } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name) private readonly model: Model<TransactionDocument>,
  ) {}
  async create(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    return await new this.model({
      ...CreateTransactionDto,
      createAt: new Date(),
    })
  }

  async findAll(): Promise<Transaction[]>{
    return this.model.find().exec();
  }

  async findByCategory(categories: String): Promise<Transaction> {
    return await this.model.findOne({ categories: categories}).exec();
  }

  async findByDate(date: Date): Promise<Transaction> {
    return await this.model.findOne({ createAt: date}).exec();
  }

  async update(updateTransactionDto: UpdateTransactionDto): Promise<Transaction> {
    return await this.model
    .findOneAndUpdate(
      {
        ...updateTransactionDto,
        createdAt: new Date(),
      },
    )
    .exec();
  }
t
  async remove(id: number): Promise<Transaction>  {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
