import { Controller, Get, Post, Body, Patch, Param, Delete, Query, NotFoundException, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Budget } from 'src/entities/budget.entity';
import * as jwt from 'jsonwebtoken';
import { JwtAuthGuard } from 'src/auth/jwt.guard';

@ApiTags('Budgets')
@Controller('budget')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Post('create')
  @ApiOperation({ summary: 'create a budget' })
  @ApiResponse({ status: 200, description: 'Created budget successfully' })
  @ApiResponse({ status: 401, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async create( @Body() createBudgetDto: CreateBudgetDto, @Req() request: Request) {
    const authHeader = request.headers['authorization'];
      if (!authHeader) {
        throw new UnauthorizedException('Authorization header missing');
      }

      const token = authHeader.split(' ')[1];
      if (!token) {
        throw new UnauthorizedException('Token missing');
      }

    const userid: any = jwt.verify(token, process.env.JWT_SECRET);
    return await this.budgetService.create(userid.id,createBudgetDto);
  }

  
  @Get('user')
  @ApiOperation({ summary: 'get a budget by month' })
  @ApiResponse({ status: 200, description: 'Get budget successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Budget not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async getBudgetsByUserRefAndMonth(
    @Query('year') year: number,
    @Query('month') month: number,
    @Req() request: Request
  ) {
    const authHeader = request.headers['authorization'];
      if (!authHeader) {
        throw new UnauthorizedException('Authorization header missing');
      }

      const token = authHeader.split(' ')[1];
      if (!token) {
        throw new UnauthorizedException('Token missing');
      }

    const userRef: any = jwt.verify(token, process.env.JWT_SECRET);
    return this.budgetService.getBudgetsByUserRefAndMonth(userRef.id, year, month);
  }


  @Patch(':id')
  @ApiOperation({ summary: 'Updated budget by month,year' })
  @ApiResponse({ status: 200, description: 'Updated budget successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Budget not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async updateBudget(
    @Param('id') id: string,
    @Body() updateBudgetDto: UpdateBudgetDto,
  ): Promise<Budget> {
    const updatedBudget = await this.budgetService.updateBudget(id, updateBudgetDto);
    if (!updatedBudget) {
      throw new NotFoundException('Budget not found');
    }
    return updatedBudget;
  }

  
  // @Get()
  // findAll() {
  //   return this.budgetService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.budgetService.findOne(+id);
  // }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleted budgets' })
  @ApiResponse({ status: 200, description: 'deleted budget successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Budget not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async remove(@Param('id') id: string) {
    return await this.budgetService.remove(id);
  }
}
