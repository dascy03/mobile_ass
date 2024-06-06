import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './../entities/user.entity';
import { ResponseStatus } from 'types/Response/ResponseStatus';
import { ERROR_EXCEPTION, SUCCESS_EXCEPTION } from 'types';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly model: Model<UserDocument>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.model.find().exec();
  }

  async getUserProfile(
    id: string,
  ): Promise<ResponseStatus<Omit<User, 'password'>>> {
    const { password, ...response }: User = await this.model
      .findById(id)
      .lean();
    if (response)
      return {
        code: 200,
        message: "successfully",
        data: response,
      };
    return {
      code: 500,
      message: "fail",
    };
  }

  async findAllByName(name: string): Promise<User[]> {
    return await this.model.find({ name: name }, null, null).exec();
  }

  async update(email: string, updateUserDto: UpdateUserDto): Promise<User> {
    const updateUser = await this.model
      .findOneAndUpdate(
        { email: email },
        { ...updateUserDto, updatedAt: new Date() },
        { new: true },
      )
      .exec();
    if (updateUser) {
      return updateUser;
    } else {
      return null;
    }
  }

  async findAllByOutcomeRange(n: number): Promise<User[]> {
    const lowerBound = n - 500000;
    const upperBound = n + 500000;
    return await this.model.find({
      outcome: { $gte: lowerBound, $lte: upperBound },
    }).exec();
  }

  async advancedSearch(
    career?: string,
    income?: number,
    outcome?: number,
  ): Promise<User[]> {
    const query: any = { };
    // console.log
    if (career) {
    query.career = { $regex: career, $options: 'i' };
    }
    if (income) {
      query.income = { $gte: income - 500000, $lte: income + 500000 };
    }

    if (outcome) {
      query.outcome = { $gte: outcome - 500000, $lte: outcome + 500000 };
    }
    console.log(query);
    return await this.model.find(query).exec();
  }


  async remove(id: string): Promise<User> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
