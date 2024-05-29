import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

export type GoalDocument = Goal & Document;
@Schema()
export class Goal {
  @Prop({required: true})
  money: number;
  @Prop({required: true})
  name: string;
  @Prop({required: true})
  categoriesRef: string;
  @Prop()
  walletRef: string;
  @Prop()
  createdAt: Date;
  @Prop()
  endDate: Date;
}
export const GoalSchema = SchemaFactory.createForClass(Goal);
