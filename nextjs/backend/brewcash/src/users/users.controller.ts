import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags , ApiResponse, ApiCreatedResponse} from '@nestjs/swagger';

@ApiTags("Users")
@Controller('users')
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

// @ApiResponse({ status: 200, description: 'Successfully.' })
// @ApiResponse({ status: 500, description: 'Internal Server Error.'})
//   @Get('all-users')
//   async findAll(): Promise<Object> {
//     try {
//       return await this.usersService.findAll();
//     } catch (err) {
//       return { message: err.message || 'Internal Server Error' };
//     }
//   }

  
// @ApiResponse({ status: 200, description: 'Successfully.' })
// @ApiResponse({ status: 500, description: 'Internal Server Error.'})
//   @Get(':name')
//   async find(@Param('name') name: string): Promise<Object> {
//     try {
//       return await this.usersService.findAllByName(name);
//     } catch (err) {
//       return { message: err.message || 'Internal Server Error' };
//     }
//   }
// @ApiResponse({ status: 200, description: 'Updated Successfully.' })
// @ApiResponse({ status: 500, description: 'Internal Server Error.'})
//   @Patch(':email')
//   async update(
//     @Param('email') email: string,
//     @Body() updateUserDto: UpdateUserDto,
//   ): Promise<Object> {
//     try {
//       const updateUser = await this.usersService.update(email, updateUserDto);
//       if (updateUser) {
//         return updateUser;
//       } else {
//         return { message: 'Not found email!' };
//       }
//     } catch (err) {
//       return { message: err.message || 'Internal Server Error' };
//     }
//   }

//   @ApiResponse({ status: 200, description: 'Deleted Successfully.' })
// @ApiResponse({ status: 500, description: 'Internal Server Error.'})
//   @Delete(':id')
//   async remove(@Param('id') id: string): Promise<Object> {
//     try {
//       const deleteUser = await this.usersService.remove(id);
//       if (deleteUser) {
//         return { message: 'Deleted user!' };
//       } else {
//         return {
//           message: 'Not found ID!',
//         };
//       }
//     } catch (err) {
//       {
//         message: err.message || 'Internal Server Error';
//       }
//     }
  // }
}