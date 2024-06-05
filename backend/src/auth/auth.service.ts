
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../entities/user.entity';
import { ERROR_EXCEPTION, ResponseStatus, SUCCESS_EXCEPTION,  } from 'types';
// import { v4 as uuidv4 } from 'uuid';
import { compare, hashPassword } from 'utils';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, RegisterDto } from './dto';
import { UserLogin, UserRegister } from './types';
import * as phoneNumberToken from 'generate-sms-verification-code';
import { MailService } from 'src/mail/mail.service';
import { CategoryDocument } from 'src/categories/entities/category.entity';

const CategoriesFakeData = require('./../entities/categories')
// import { MailService } from 'src/mail/mail.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('users') private readonly userModel: Model<UserDocument>,
    private readonly jwtService: JwtService,
    private mailService: MailService,
    @InjectModel('categories') private readonly categoriesModel: Model<CategoryDocument>,
  ) {}

  async login(userDto: LoginDto): Promise<ResponseStatus<UserLogin>> {
    const user = await this.userModel.findOne({ email: userDto.email, active: true }).lean();
    if (user && (await compare(userDto.password, user.password))) {
      return {
        code: HttpStatus.OK,
        message: "login successful",
        data: {
          id: user._id,
          // email: user.email,
          name: user.name,
          // gender: user.gender,
          // birthDay: user.birthDay,
          // createdAt: user.createdAt,
          // career: user.career,
          // income: user.income,
          // outcome: user.outcome,
          accessToken: this.jwtService.sign(
            { id: user._id, email: user.email }, // Payload
            { expiresIn: '7d' } // Token expiration time
          ),
          active: user.active,
        },
      };
    }

    throw new HttpException(
      ERROR_EXCEPTION.LOGIN_FAILED,
      HttpStatus.BAD_REQUEST,
    );
  }

  async register(userDto: RegisterDto): Promise<ResponseStatus<UserRegister>> {
    const user = await this.userModel.findOne({ email: userDto.email });
    if (user) {
      throw new HttpException('User already exist', HttpStatus.BAD_REQUEST);
    }

    const otp = phoneNumberToken(6, { type: 'string' });

    const newUser = await this.userModel.create({
      ...userDto,
      active: false,
      otp,
      password: await hashPassword(userDto.password),
    });

    await this.mailService.sendUserConfirmation(newUser, otp);

    return {
      code: HttpStatus.OK,
      message: "successfully registered",
      data: {
        name: newUser.name,
        createdAt: newUser.createdAt,
        email: newUser.email,
        
      },
    };
  }

  async otpVerify({
    email,
    otp,
  }: {
    email: string;
    otp: string;
  }): Promise<ResponseStatus<null>> {
    const user: UserDocument = await this.userModel.findOne({ email }).lean();
    if (otp != user.otp) {
      console.log(otp, user);
      return {
        code: HttpStatus.UNAUTHORIZED,
        message: ERROR_EXCEPTION.UNAUTHORIZED,
      };
    }
    await this.userModel.findByIdAndUpdate(user._id, { active: true });

    const userReg = await this.userModel.findOne({ _id: user._id });

    if(userReg) {
        const categoriesWithUserId = CategoriesFakeData.map(category => ({
          ...category,
          userRef: userReg._id,
          createdAt: new Date(),
          updatedAt: new Date(),
        }))

        await this.categoriesModel.insertMany(categoriesWithUserId);
    }
    return {
      code: HttpStatus.OK,
      message: SUCCESS_EXCEPTION.OK,
    };
  }
}
