import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UnauthorizedException,
  Req,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiTags, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @ApiResponse({ status: 200, description: 'successfully' })
  @ApiResponse({ status: 500, description: 'fail!' })
  async create(@Body() createCategoryDto: CreateCategoryDto, @Req() request: Request): Promise<Object> {
    try {
      //how to get accessToken from request
      const authHeader = request.headers['authorization'];
      if (!authHeader) {
        throw new UnauthorizedException('Authorization header missing');
      }

      const token = authHeader.split(' ')[1];
      if (!token) {
        throw new UnauthorizedException('Token missing');
      }

      const _id: any = jwt.verify(token, 'super-ultra-max-secret');
      return await this.categoriesService.create(_id, createCategoryDto);
    } catch (err) {
      return { message: err.message || 'Internal Server Error' };
    }
  }

  @Get()
  @ApiResponse({ status: 200, description: 'successfully' })
  @ApiResponse({ status: 500, description: 'fail!' })
  findAll(@Req() request: Request){
    const authHeader = request.headers['authorization'];
    if (!authHeader) {
      throw new UnauthorizedException('Authorization header missing');
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Token missing');
    }
    const userRef: any = jwt.verify(token,process.env.JWT_SECRET);
    // console.log("tttt: ",userRef)
    return this.categoriesService.findAll(userRef);
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'successfully' })
  @ApiResponse({ status: 500, description: 'fail!' })
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'successfully' })
  @ApiResponse({ status: 500, description: 'fail!' })
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesService.update(id, updateCategoryDto);
  }

  @Delete()
  @ApiResponse({ status: 200, description: 'successfully' })
  @ApiResponse({ status: 500, description: 'fail!' })
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(id);
  }
}
