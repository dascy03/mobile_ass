import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Req,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';
@ApiTags('Wallets')
@Controller('wallets')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class WalletsController {
  constructor(private walletsService: WalletsService) {}

  @Post()
  @ApiResponse({ status: 200, description: 'successfully' })
  @ApiResponse({ status: 500, description: 'fail!' })
  async create(
    @Body() createWalletDto: CreateWalletDto,
    @Req() request: Request,
  ): Promise<Object> {
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

      const user: any = jwt.verify(token, 'super-ultra-max-secret');
      const _id = user.id;
      return await this.walletsService.create(_id,createWalletDto);
    }
    catch (err) {
      return {message: err.message || 'Internal Server Error'};
    }
  }

  @Get()
  @ApiResponse({ status: 200, description: 'successfully' })
  @ApiResponse({ status: 500, description: 'fail!' })
  findAll(@Req() request: Request) {
    const authHeader = request.headers['authorization'];
    if (!authHeader) {
      throw new UnauthorizedException('Authorization header missing');
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Token missing');
    }
    const userRef: any = jwt.verify(token, 'super-ultra-max-secret');
    return this.walletsService.findAll(userRef);
  }
  @Put(':id')
  @ApiResponse({ status: 200, description: 'successfully' })
  @ApiResponse({ status: 500, description: 'fail!' })
  update(@Param('id') id: string, @Body() updateWalletDto: UpdateWalletDto) {
    return this.walletsService.update(id, updateWalletDto);
  }
  @Delete(':id')
  @ApiResponse({ status: 200, description: 'successfully' })
  @ApiResponse({ status: 500, description: 'fail!' })
  remove(@Param('id') id: string) {
    return this.walletsService.remove(id);
  }
}
