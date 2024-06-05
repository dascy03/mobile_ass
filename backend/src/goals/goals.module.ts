import { Module } from '@nestjs/common';
import { GoalsService } from './goals.service';
import { GoalsController } from './goals.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Goal, GoalSchema } from './entities/goal.entity';
@Module({
  controllers: [GoalsController],
  providers: [GoalsService],
  imports: [
    MongooseModule.forFeature([{ name: Goal.name, schema: GoalSchema }]),
  ],
})
export class GoalsModule {}
