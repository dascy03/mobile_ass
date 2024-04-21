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
  create(@Body() createTransactionDto: CreateTransactionDto) {
    try {
      return this.transactionsService.create(createTransactionDto);
    } catch (err) {
      return { message: err.message || 'Internal Server Error' };
    }
  }
  @Get()
  findAll() {
    try {
      return this.transactionsService.findAll();
    } catch (err) {
      return { message: err.message || 'Internal Server Error' };
    }
  }
  
  @Get(':category')
  findByCategory(@Param('category') category: string) {
    try {
      return this.transactionsService.findByCategory(category);
    } catch (err) {
      return { message: err.message || 'Internal Server Error' };
    }
  }

  @Get(':date')
  findByDate(@Param('date') date: Date) {
    try {
      return this.transactionsService.findByCategory(date);
    } catch (err) {
      return { message: err.message || 'Internal Server Error' };
    }
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTransactionDto: UpdateTransactionDto,
  ) {
    try {
      return this.transactionsService.update(+id, updateTransactionDto);
    } catch (err) {
      return { message: err.message || 'Internal Server Error' };
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.transactionsService.remove(+id);
    } catch (err) {
      return { message: err.message || 'Internal Server Error' };
    }
  }
}
