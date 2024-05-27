import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags , ApiResponse, ApiCreatedResponse, ApiBearerAuth, ApiOperation} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { User } from 'src/users/entities/user.entity';
import { ResponseStatus } from 'types/Response/ResponseStatus';

@ApiTags("Users")
@Controller('users')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class UsersController {
  constructor(private usersService: UsersService) {}

//   @Post('register')
// @ApiResponse({ status: 201, description: ' Sign-up Successfully.' })
// @ApiResponse({ status: 500, description: 'Internal Server Error.'})
//   async create(@Body() createUserDto: CreateUserDto): Promise<Object> {
//     try {
//       return await this.usersService.create(createUserDto);
//     } catch (err) {
//       return { message: err.message || 'Internal Server Error' };
//     }
//   }

  @Get(':id')
  @ApiOperation({ summary: 'Get user profile by ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns the user profile with the specified ID',
    type: User,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  getUserProfile(
    @Param('id') id: string,
  ): Promise<ResponseStatus<Omit<User, 'password'>>> {
    return this.usersService.getUserProfile(id);
  }



@ApiResponse({ status: 200, description: 'Successfully.' })
@ApiResponse({ status: 500, description: 'Internal Server Error.'})
  @Get('all-users')
  async findAll(): Promise<Object> {
    try {
      return await this.usersService.findAll();
    } catch (err) {
      return { message: err.message || 'Internal Server Error' };
    }
  }


@ApiResponse({ status: 200, description: 'Successfully.' })
@ApiResponse({ status: 500, description: 'Internal Server Error.'})
  @Get(':name')
  async find(@Param('name') name: string): Promise<Object> {
    try {
      return await this.usersService.findAllByName(name);
    } catch (err) {
      return { message: err.message || 'Internal Server Error' };
    }
  }
@ApiResponse({ status: 200, description: 'Updated Successfully.' })
@ApiResponse({ status: 500, description: 'Internal Server Error.'})
  @Patch(':email')
  async update(
    @Param('email') email: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<Object> {
    try {
      const updateUser = await this.usersService.update(email, updateUserDto);
      if (updateUser) {
        return updateUser;
      } else {
        return { message: 'Not found email!' };
      }
    } catch (err) {
      return { message: err.message || 'Internal Server Error' };
    }
  }
  @ApiResponse({ status: 200, description: 'Deleted Successfully.' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.'})
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Object> {
    try {
      const deleteUser = await this.usersService.remove(id);
      if (deleteUser) {
        return { message: 'Deleted user!' };
      } else {
        return {
          message: 'Not found ID!',
        };
      }
    } catch (err) {
      {
        message: err.message || 'Internal Server Error';
      }
    }
  }
}
