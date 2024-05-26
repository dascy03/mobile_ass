import { Controller, Get, Post, Body, Param, Delete, Patch, Put } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResponse } from '@nestjs/swagger';
@ApiTags('Wallets')
@Controller('wallets')
export class WalletsController {
  constructor(private walletsService: WalletsService) {}

  @Post()
  @ApiResponse({ status: 200, description: 'successfully'})
  @ApiResponse({ status: 500, description: 'fail!'})
  async create(@Body() createWalletDto: CreateWalletDto): Promise<Object>{
    try {
      return await this.walletsService.create(createWalletDto);
    }
    catch (err) {
      return {message: err.message || 'Internal Server Error'};
    }
  }

  @Get()
  @ApiResponse({status: 200, description: 'successfully'})
  @ApiResponse({status: 500, description: 'fail!'})
  findAll() {
    return this.walletsService.findAll();
  }
  @Put(':id')
  @ApiResponse({status: 200, description: 'successfully'})
  @ApiResponse({status: 500, description: 'fail!'})
  update(@Param('id') id: string, @Body() updateWalletDto: UpdateWalletDto) {
    return this.walletsService.update(id, updateWalletDto);
  }
  @Delete(':id')
  @ApiResponse({status: 200, description: 'successfully'})
  @ApiResponse({status: 500, description: 'fail!'})
  remove(@Param('id') id: string) {
    return this.walletsService.remove(id);
  }
}
