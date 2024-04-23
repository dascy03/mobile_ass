import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TransactionDocument = Transaction & Document;

@Schema()
export class Transaction {
  @Prop({ required: true })
  money: number;

  @Prop({ required: true })
  categories: string;

  @Prop()
  note: string;

  @Prop()
  shareflag?: boolean;

  @Prop({ required: true })
  type: boolean; // income = True | outcome = False
  @Prop({ required: true })
  userRef: string;
  @Prop({ required: true })
  createdAt: Date;
  @Prop()
  updatedAt?: Date;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
