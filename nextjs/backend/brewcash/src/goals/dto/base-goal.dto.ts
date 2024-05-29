import {ApiProperty} from '@nestjs/swagger';

export class BaseGoalDto {
  @ApiProperty()
  money: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  categoriesRef: string;
  @ApiProperty()
  walletRef: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  endDate: Date;
}
