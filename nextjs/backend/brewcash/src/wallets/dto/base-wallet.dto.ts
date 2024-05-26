import {ApiProperty} from '@nestjs/swagger';
export class BaseWalletDto {
    @ApiProperty()
    Name: string;
    @ApiProperty()
    Balance: number;
    @ApiProperty()
    Icon: string;
    @ApiProperty()
    createdAt: Date;
    @ApiProperty()
    updatedAt?: Date;
}
