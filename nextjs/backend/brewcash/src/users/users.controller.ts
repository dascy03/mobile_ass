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
import { ApiBearerAuth, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

// @ApiBearerAuth()
@ApiTags("Users")

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('register')
  @ApiResponse({status:201, description:"successfully"})
  @ApiResponse({status:401, description:"fail!"})
  async create(@Body() createUserDto: CreateUserDto){
    return await this.usersService.create(createUserDto);
  }

  @Get('all-user')
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':name')
  async findOne(@Param('name') name: string) {
    return await this.usersService.findAllByName(name);
  }

  @Patch(':email')
  update(@Param('email') email: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(email, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
