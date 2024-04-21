import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TransactionDocument = Transaction & Document;

@Schema()
export class Transaction {
  @Prop({ required: true })
  money: string;

  @Prop({ required: true })
  categories: string;

  @Prop()
  note: string;

  @Prop()
  shareflag?: boolean;

  @Prop({ required: true })
  type: boolean; // income = True | outcome = False

  @Prop()
  completedAt?: Date;
  @Prop()
  createdAt?: Date;
  @Prop()
  deletedAt?: Date;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
