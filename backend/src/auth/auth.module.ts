import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy.ts';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../entities/user.entity';
import { MailModule } from 'src/mail/mail.module';
import { CategorySchema } from 'src/categories/entities/category.entity';

@Module({
  imports: [
    // JwtModule.register({}),
    MongooseModule.forFeature([
      {
        name: 'users',
        schema: UserSchema,
      },
      {
        name: 'categories',
        schema: CategorySchema,
      }
    ]),
    PassportModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: '120s' },
      }),
    }),
    MailModule,
  ],
  controllers: [AuthController],
  providers: [JwtStrategy, AuthService],
})
export class AuthModule {}
