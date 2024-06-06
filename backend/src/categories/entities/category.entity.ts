import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type CategoryDocument = Category & Document;
@Schema()
export class Category {
  @Prop({required: true, unique: true})
  name: string;
  @Prop({required: true})
  isIncome: boolean;
  @Prop({required: true})
  userRef: string;
  @Prop({required: true})
  createdAt: Date;
  @Prop()
  updatedAt?: Date;
  @Prop({default: false})
  isDeleted: boolean;
}
export const CategorySchema = SchemaFactory.createForClass(Category);
