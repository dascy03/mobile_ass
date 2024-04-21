import { BaseTransactionDto } from './base-transaction.dto';

export class UpdateTransactionDto extends BaseTransactionDto {
  completedAt: Date;
}
