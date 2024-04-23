import { ApiProperty } from "@nestjs/swagger";

export class BaseTransactionDto {
  @ApiProperty()
    money: string;

    @ApiProperty()
    categories: string;

    @ApiProperty()
    note: string;

    @ApiProperty()
    type: boolean;
    
    @ApiProperty()
    shareflag: boolean;
}

