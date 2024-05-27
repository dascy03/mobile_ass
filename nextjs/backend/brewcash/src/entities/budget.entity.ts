import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type BudgetDocument = Budget & Document;

@Schema({ timestamps: true })
export class Budget {
  @ApiProperty({ example: 1000, description: 'The amount of money allocated for the budget' })
  @Prop({ required: true })
  money: number;

//   @ApiProperty({ example: 5000, description: 'The total amount of money available' })
//   @Prop({ required: true })
//   total_money: number;

  @ApiProperty({ example: 200, description: 'The amount of money already spent', default: 0 })
  @Prop({ default: 0 })
  money_spend: number;

//   @ApiProperty({ example: 1500, description: 'The total amount of money spent', default: 0 })
//   @Prop({ default: 0 })
//   total_money_spend: number;

  @ApiProperty({ 
    example:"food", 
    description: 'The categories in both Vietnamese and English' 
  })
  @Prop({ required: true })
  categories: string;

  @ApiProperty({ example: '2024-05-01', description: 'The start date of the budget period' })
  @Prop({ required: true })
  date_start: string;

  @ApiProperty({ example: '2024-05-31', description: 'The end date of the budget period' })
  @Prop({ required: true })
  date_end: string;

  @ApiProperty({ example: false, description: 'Indicates if the budget is deleted', default: false })
  @Prop({ default: false })
  deleted: boolean;

  @ApiProperty({ example: 'user123', description: 'Reference to the user who owns the budget' })
  @Prop({ required: true })
  userRef: string;

  @ApiProperty({
    example: '2022-05-13T08:00:00.000Z',
    description: 'The date and time when the budget was created',
  })
  @Prop()
  createdAt?: Date;

  @ApiProperty({
    example: '2022-05-13T08:00:00.000Z',
    description: 'The date and time when the budget was last updated',
  })
  @Prop()
  updatedAt?: Date;

//   @ApiProperty({
//     example: true,
//     description: 'Indicates if the budget recurs monthly',
//   })
//   @Prop({ default: false })
//   recurringMonthly: boolean;
}

export const BudgetSchema = SchemaFactory.createForClass(Budget);
