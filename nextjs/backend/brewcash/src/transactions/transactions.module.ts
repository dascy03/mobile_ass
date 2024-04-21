import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Transaction, TransactionSchema } from './entities/transaction.entity';
@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService],
  imports: [MongooseModule.forFeature([{
    schema: TransactionSchema
  }])],
})
export class TransactionsModule {}
