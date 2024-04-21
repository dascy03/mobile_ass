import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}

  @Post()
  async create(
    @Body() createTransactionDto: CreateTransactionDto,
  ): Promise<Object> {
    try {
      return await this.transactionsService.create(createTransactionDto);
    } catch (err) {
      return { message: err.message || 'Internal Server Error' };
    }
  }
  @Get()
  async findAll(): Promise<Object> {
    try {
      return await this.transactionsService.findAll();
    } catch (err) {
      return { message: err.message || 'Internal Server Error' };
    }
  }
  @Get('category')
  async findByCategory(@Param('category') category: string): Promise<Object> {
    try {
      return await this.transactionsService.findByCategory(category);
    } catch (err) {
      return { message: err.message || 'Internal Server Error' };
    }
  }

  @Get('date')
  async findByDate(@Param('date') date: string): Promise<Object> {
    try {
      return await this.transactionsService.findByDate(date);
    } catch (err) {
      return { message: err.message || 'Internal Server Error' };
    }
  }

  @Patch()
  async update(
    @Body() updateTransactionDto: UpdateTransactionDto,
  ): Promise<Object> {
    try {
      return await this.transactionsService.update(updateTransactionDto);
    } catch (err) {
      return { message: err.message || 'Internal Server Error' };
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Object> {
    try {
      return await this.transactionsService.remove(+id);
    } catch (err) {
      return { message: err.message || 'Internal Server Error' };
    }
  }
}
