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
import { ApiTags } from '@nestjs/swagger';
import { ApiResponse } from '@nestjs/swagger';
@ApiTags("Transactions")

@Controller('transactions')
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {
  }

  @Post()
  @ApiResponse({status: 200, description: "successfully"})
  @ApiResponse({status: 500, description: "fail!"})
  async create(
      @Body() createTransactionDto: CreateTransactionDto,
  ): Promise<Object> {
    try {
      return await this.transactionsService.create(createTransactionDto);
    } catch (err) {
      return {message: err.message || 'Internal Server Error'};
    }
  }

  @Get()
  @ApiResponse({status: 200, description: "successfully"})
  @ApiResponse({status: 500, description: "fail!"})
  async findAll(): Promise<Object> {
    try {
      return await this.transactionsService.findAll();
    } catch (err) {
      return {message: err.message || 'Internal Server Error'};
    }
  }


  @Get(':category')
  @ApiResponse({status: 200, description: "successfully"})
  @ApiResponse({status: 500, description: "fail!"})

  async findByCategory(@Param('category') category: string): Promise<Object> {
    try {
      return await this.transactionsService.findByCategory(category);
    } catch (err) {
      return {message: err.message || 'Internal Server Error'};
    }
  }


  @Get(':date')
  @ApiResponse({status: 200, description: "successfully"})
  @ApiResponse({status: 500, description: "fail!"})

  async findByDate(@Param('date') date: string): Promise<Object> {
    try {
      return await this.transactionsService.findByDate(date);
    } catch (err) {
      return {message: err.message || 'Internal Server Error'};
    }
  }

  @Patch()
  @ApiResponse({status: 200, description: "successfully"})
  @ApiResponse({status: 500, description: "fail!"})
  async update(
      @Body() updateTransactionDto: UpdateTransactionDto,
  ): Promise<Object> {
    try {
      return await this.transactionsService.update(updateTransactionDto);
    } catch (err) {
      return {message: err.message || 'Internal Server Error'};
    }
  }

  @Delete(':id')
  @ApiResponse({status: 200, description: "successfully"})
  @ApiResponse({status: 500, description: "fail!"})
  async remove(@Param('id') id: string): Promise<Object> {
    try {
      return await this.transactionsService.remove(+id);
    } catch (err) {
      return {message: err.message || 'Internal Server Error'};
    }
  }
}
