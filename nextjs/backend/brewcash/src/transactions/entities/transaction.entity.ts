import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TransactionDocument = Transaction & Document;

@Schema()
export class Transaction {
  @Prop({ required: true })
  money: string;

  @Prop({ required: true })
  categories: string;

  @Prop({ required: true })
  note: string;

  @Prop()
  shareflag?: Date;

  @Prop({ required: true })
  type: Date;

  @Prop()
  completedAt?: Date;
  @Prop()
  createdAt?: Date;
  @Prop()
  deletedAt?: Date;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
