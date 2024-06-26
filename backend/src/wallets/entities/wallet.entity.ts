import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type WalletDocument = Wallet & Document;
@Schema()
export class Wallet {
  @Prop({ required: true })
  Name: string;
  @Prop({ required: true })
  Balance: number;
  @Prop({ required: true})
  fixedBalance: number;
  @Prop()
  Icon: string;
  @Prop()
  userRef: string;
  @Prop()
  createdAt?: Date;
  @Prop()
  updatedAt?: Date;
  @Prop({ default: false})
  isDeleted: boolean;
}
export const WalletSchema = SchemaFactory.createForClass(Wallet);
