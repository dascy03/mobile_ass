import { ApiProperty } from "@nestjs/swagger";

export class BaseBudgetDto {
    @ApiProperty({ example: 1000, description: 'The amount of money allocated for the budget' })
    money: number;

    @ApiProperty({ 
    example:"food", 
    description: 'The categories in both Vietnamese and English' 
  })
    categories: string

    @ApiProperty({ example: '2024-05-01', description: 'The start date of the budget period' })
    date_start: string;

    @ApiProperty({ example: '2024-05-31', description: 'The end date of the budget period' })
    date_end: string;

    

    deleted: boolean ;
}

