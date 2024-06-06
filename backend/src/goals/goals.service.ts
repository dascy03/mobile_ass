import { Injectable } from '@nestjs/common';
import { CreateGoalDto } from './dto/create-goal.dto';
import { UpdateGoalDto } from './dto/update-goal.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Goal, GoalDocument } from './entities/goal.entity';

@Injectable()
export class GoalsService {
  constructor(
    @InjectModel(Goal.name)
    private readonly model: Model<GoalDocument>,
  ) {}
    async create(userid:any,createGoalDto: CreateGoalDto): Promise<Goal>{
    return new this.model({
      ...createGoalDto,
      userRef: userid,
    }).save();
  }

  findAll() {
    return `This action returns all goals`;
  }

  findOne(id: number) {
    return `This action returns a #${id} goal`;
  }

  update(id: number, updateGoalDto: UpdateGoalDto) {
    return `This action updates a #${id} goal`;
  }

  remove(id: number) {
    return `This action removes a #${id} goal`;
  }
}
