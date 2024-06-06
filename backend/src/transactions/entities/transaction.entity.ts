import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TransactionDocument = Transaction & Document;

@Schema()
export class Transaction {
  @Prop({ required: true })
  money: number;
  @Prop({ required: true })
  categoriesRef: string;
  @Prop()
  walletRef: string;
  @Prop()
  note: string;
  // @Prop({ default: false})
  // shareflag: boolean;
  @Prop()
  nameCategory: string;
  @Prop({ default: false })
  type: boolean; // income = True | outcome = False
  @Prop({ required: true })
  userRef: string;
  @Prop({ required: true })
  dateCreated: Date;
  @Prop()
  updatedAt?: Date;
  @Prop()
  createdAt: Date;
  @Prop({ default: false})
  isDeleted?: boolean;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
