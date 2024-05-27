import { ApiProperty } from '@nestjs/swagger';
export class BaseCategoryDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  isIncome: boolean;
}
