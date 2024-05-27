import { Module } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetController } from './budget.controller';
import { Budget, BudgetSchema } from 'src/entities/budget.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/entities/user.entity';

@Module({
  controllers: [BudgetController],
  providers: [BudgetService],
  imports:[MongooseModule.forFeature([{
    name: Budget.name,
    schema: BudgetSchema
  },{
    name: User.name,
    schema: UserSchema
  }])]
})
export class BudgetModule {}
