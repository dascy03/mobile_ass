import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './entities/user.entity.js';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly model: Model<UserDocument>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    return await new this.model({
      ...createUserDto,
      createdAt: new Date(),
    }).save();
  }

  async findAll(): Promise<User[]> {
    return await this.model.find().exec();
  }

  async findOne(name: string): Promise<User> {
    return await this.model.findOne({ name: name }).exec();
  }

  async update(name: string, updateUserDto: UpdateUserDto): Promise<User> {
    return await this.model
      .findOneAndReplace(
        { name: name },
        {
          ...UpdateUserDto,
          createdAt: new Date(),
        },
      )
      .exec();
  }

  async remove(id: number): Promise<User> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
