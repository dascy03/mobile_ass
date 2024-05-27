import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './entities/user.entity';
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
        code: HttpStatus.OK,
        message: SUCCESS_EXCEPTION.OK,
        data: response,
      };
    return {
      code: HttpStatus.NOT_FOUND,
      message: ERROR_EXCEPTION.NOT_FOUND,
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

  async remove(id: string): Promise<User> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
