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

  async remove(id: string): Promise<User> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
