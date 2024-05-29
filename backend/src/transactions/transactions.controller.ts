import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UnauthorizedException,
  UseGuards,
  Req,
  Query,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { ApiTags, ApiBearerAuth, ApiOperation} from '@nestjs/swagger';
import { ApiResponse } from '@nestjs/swagger';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { ShareReport } from 'src/entities/share-report.entity';
@ApiTags('Transactions')
@Controller('transactions')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {
  }

  @Post()
  @ApiResponse({status: 200, description: "successfully"})
  @ApiResponse({status: 500, description: "fail!"})
  async create(@Body() createTransactionDto: CreateTransactionDto, @Req() request:Request ): Promise<Object> {
    try {
      const authHeader = request.headers['authorization'];
      if (!authHeader) {
        throw new UnauthorizedException('Authorization header missing');
      }
      const token = authHeader.split(' ')[1];
      if (!token) {
        throw new UnauthorizedException('Token missing');
      }
      const _id: any = jwt.verify(token, 'super-ultra-max-secret');
      return await this.transactionsService.create(_id, createTransactionDto);
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
 
  @Get('report/detail')
  @ApiOperation({ summary: 'Get a report by month and year' })
  @ApiResponse({ status: 200, description: 'Get report successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async getMonthlyReport(@Query('month') month: number, @Query('year') year: number, @Req() request: Request): Promise<any>{
    const authHeader = request.headers['authorization'];
    if (!authHeader) {
      throw new UnauthorizedException('Authorization header missing');
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Token missing');
    }
    const userRef: any = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(userRef,month,year);
    return await this.transactionsService.getMonthlyReport(userRef,month, year);
  }

  @Get('share-report')
  @ApiOperation({ summary: 'Get share report by month and year' })
  @ApiResponse({ status: 200, description: 'Get report successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async getShareReport(
    @Query('userRef') userRef: string,
    @Query('month') month: number,
    @Query('year') year: number,
  ): Promise<ShareReport> {
    return this.transactionsService.getShareReport(userRef, month, year);
  }

  @Patch('set-share-flag')
  @ApiOperation({ summary: 'update shareflag' })
  @ApiResponse({ status: 200, description: 'Get report successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async setShareFlag(
    @Query('userRef') userRef: string,
    @Query('month') month: number,
    @Query('year') year: number,
  ) {
    return await this.transactionsService.setShareReport(userRef, month, year);
  }

  @Get('report/outcome')
  @ApiOperation({ summary: 'Get a report outcome by month and year' })
  @ApiResponse({ status: 200, description: 'Get report successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async getMonthlyReportOutcome(
    @Req() request: Request,
    @Query('month') month: number,
    @Query('year') year: number,
  ) {
    const authHeader = request.headers['authorization'];
    if (!authHeader) {
      throw new UnauthorizedException('Authorization header missing');
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Token missing');
    }
    const userRef: any = jwt.verify(token, process.env.JWT_SECRET);
    return await this.transactionsService.getMonthlyReportOutcome(userRef, month, year);
  }

  @Get('report/income')
  @ApiOperation({ summary: 'Get a report income by month and year' })
  @ApiResponse({ status: 200, description: 'Get report successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async getMonthlyReportIncome(
    @Req() request: Request,
    @Query('month') month: number,
    @Query('year') year: number,
  ) {
    const authHeader = request.headers['authorization'];
    if (!authHeader) {
      throw new UnauthorizedException('Authorization header missing');
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Token missing');
    }
    const userRef: any = jwt.verify(token, process.env.JWT_SECRET);
    return await this.transactionsService.getMonthlyReportIncome(userRef, month, year);
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
