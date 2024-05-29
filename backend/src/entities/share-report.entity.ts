import { Schema, Document } from 'mongoose';

export interface ShareReport extends Document {
  userRef: string;
  month: number;
  year: number;
  totalOutcome: number;
  averageDailyOutcome: number;
  shareflag: boolean;
  transactions: any[];

}

export const ShareReportSchema = new Schema<ShareReport>({
  userRef: { type: String, required: true },
  month: { type: Number, required: true },
  year: { type: Number, required: true },
  totalOutcome: { type: Number, required: true },
  averageDailyOutcome: { type: Number, required: true },
  shareflag: { type: Boolean, default: false },
  transactions: { },
});
