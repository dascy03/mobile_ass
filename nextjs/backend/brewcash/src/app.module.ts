import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
// import { WalletsModule } from './wallets/wallets.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionsModule } from './transactions/transactions.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { BudgetModule } from './budget/budget.module';
@Module({

  imports: [
    ConfigModule.forRoot({ isGlobal: true}),
    MongooseModule.forRoot(
      'mongodb+srv://clay:1234@brewcash.flk27ma.mongodb.net/brewcash?retryWrites=true&w=majority&appName=BrewCash',
    ),
    UsersModule,
    // WalletsModule,
    TransactionsModule,
    AuthModule,
    BudgetModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
