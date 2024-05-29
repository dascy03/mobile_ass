import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { Budget, BudgetDocument } from 'src/entities/budget.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/entities/user.entity';
import { Category, CategoryDocument } from 'src/categories/entities/category.entity';

@Injectable()
export class BudgetService {
  constructor(
    @InjectModel(Budget.name) private readonly budgetModel: Model<BudgetDocument>,
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    @InjectModel(Category.name) private readonly categoryModel: Model<CategoryDocument>
  ) {}
  async create(userid: string, createBudgetDto: CreateBudgetDto) {
    const existingUser = await this.userModel.findOne({ _id: userid });
    const findCategories = await this.categoryModel.findOne({ name: createBudgetDto.categories });
    if(existingUser) {
      const newBudget = await this.budgetModel.create({
      ...createBudgetDto,
      categoriesRef: findCategories._id,
      userRef: userid,
    })

    await newBudget.save();
    return newBudget;
    }
    else {
      throw new Error("UnAuthorized!")
    }
    
  }

   async getBudgetsByUserRefAndMonth(userRef: string, year: number, month: number): Promise<{budgets: Budget[], total_money: number , total_spend_money: number}> {
    // Calculate the start and end dates for the month
    const startDate = new Date(year, month - 1, 1).toISOString(); // Months are 0-based in JavaScript Date
    const endDate = new Date(year, month, 0, 23, 59, 59, 999).toISOString(); // Last day of the month
    console.log("date ",startDate, endDate);
    const budgets = await this.budgetModel.find({
      userRef,
      date_start: { $gte: startDate },
      date_end: { $lte: endDate },
    }).exec();

    const total_money = budgets.reduce((sum, budget) => sum + budget.money, 0);
    const total_spend_money = budgets.reduce((sum, budget) => sum + budget.money_spend, 0);

    return {
      budgets,
      total_money,
      total_spend_money,
    };

  }

  async updateBudget(budgetId: string, updateBudgetDto: UpdateBudgetDto): Promise<Budget> {
    const budget = await this.budgetModel.findById(budgetId);
    // console.log(budget)
    if (!budget) {
      throw new Error('Budget not found');
    }

    if (updateBudgetDto.categories) {
      budget.categories = updateBudgetDto.categories;
    }

    if (updateBudgetDto.money) {
      budget.money = updateBudgetDto.money;
    }

    if (updateBudgetDto.date_end) {
      budget.date_end = updateBudgetDto.date_end;
    }

    await budget.save();

    return budget;
  }

  // findAll() {
  //   return `This action returns all budget`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} budget`;
  // }

  // update(id: number, updateBudgetDto: UpdateBudgetDto) {
  //   return `This action updates a #${id} budget`;
  // }

  async remove(id: string): Promise<Budget> {
    const budget = await this.budgetModel.findById(id);
    if (!budget) {
      throw new NotFoundException('Budget not found');
    }
    budget.deleted = true;
    return await budget.save();
  }
}
