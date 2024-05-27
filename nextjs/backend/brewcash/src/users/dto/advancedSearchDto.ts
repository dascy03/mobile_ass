
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class AdvancedSearchUserDto {
     @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  career?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  income?: number

    @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  outcome?: number;
}
