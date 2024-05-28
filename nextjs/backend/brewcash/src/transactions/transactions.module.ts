import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Transaction, TransactionSchema } from './entities/transaction.entity';
import { Wallet, WalletSchema } from 'src/wallets/entities/wallet.entity';
@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService],
  imports: [MongooseModule.forFeature([{
    name: Transaction.name,
    schema: TransactionSchema
  },
  {
    name: Wallet.name,
    schema: WalletSchema
   }
])],
})
export class TransactionsModule {}
