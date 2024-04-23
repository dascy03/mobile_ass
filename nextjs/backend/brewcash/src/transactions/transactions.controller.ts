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

  @Post('create')
  async create(
    @Body() createTransactionDto: CreateTransactionDto,
  ): Promise<Object> {
    try {
      return await this.transactionsService.create(createTransactionDto);
    } catch (err) {
      return { message: err.message || 'Internal Server Error' };
    }
  }
  @Get('all-transactions')
  async findAll(): Promise<Object> {
    try {
      return await this.transactionsService.findAll();
    } catch (err) {
      return { message: err.message || 'Internal Server Error' };
    }
  }
  @Get('category/:category')
  async findByCategory(@Param('category') category: string): Promise<Object> {
    try {
      return await this.transactionsService.findByCategory(category);
    } catch (err) {
      return { message: err.message || 'Internal Server Error' };
    }
  }

  // @Get('date/:date')
  // async findByDate(@Param('date') date: Date): Promise<Object> {
  //   try {
  //     return await this.transactionsService.findByDate(date);
  //   } catch (err) {
  //     return { message: err.message || 'Internal Server Error' };
  //   }
  // }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Object> {
    try {
      const deleteTransaction = await this.transactionsService.remove(id);
      if (!deleteTransaction) {
        return { message: 'Not found ID!' };
      } else {
        return { message: 'Deleted transaction!' };
      }
    } catch (err) {
      return { message: err.message || 'Internal Server Error' };
    }
  }
}
