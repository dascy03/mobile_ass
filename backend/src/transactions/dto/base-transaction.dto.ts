import { ApiProperty } from "@nestjs/swagger";

export class BaseTransactionDto {
  @ApiProperty()
  money: number;
  @ApiProperty()
  categoriesRef: string;
  @ApiProperty()
  walletRef: string;
  @ApiProperty()
  note: string;
  @ApiProperty()
  type: boolean;
  @ApiProperty()
  dateCreated: string;
}
