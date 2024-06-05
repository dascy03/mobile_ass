import { ShareReport, ShareReportSchema } from './../entities/share-report.entity';
import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Wallet, WalletSchema } from 'src/wallets/entities/wallet.entity';
import { Transaction, TransactionSchema } from './entities/transaction.entity';
import { Budget, BudgetSchema } from '../entities/budget.entity';
import { Category, CategorySchema} from '../categories/entities/category.entity';

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
    },
    {
      name: Budget.name,
      schema: BudgetSchema
    },
    {
      name: Category.name,
      schema: CategorySchema
    },
    {
      name: 'ShareReport',
      schema: ShareReportSchema
    }
  ])],
})
export class TransactionsModule {}
