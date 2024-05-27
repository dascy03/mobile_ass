import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class UpdateBudgetDto {
  @ApiPropertyOptional({ example: 'Shopping', description: 'The updated category of the budget' })
  @IsOptional()
  @IsString()
  categories?: string;

  @ApiPropertyOptional({ example: 500, description: 'The updated amount of money allocated for the budget' })
  @IsOptional()
  @IsNumber()
  money?: number;

  @ApiPropertyOptional({ example: '2024-06-30', description: 'The updated end date of the budget period' })
  @IsOptional()
  @IsDateString()
  date_end?: string;
}
