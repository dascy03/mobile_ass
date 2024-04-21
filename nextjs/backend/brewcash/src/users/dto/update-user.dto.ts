// import { BaseUserDto } from './base-user.dto';

// export class UpdateUserDto extends BaseUserDto {
//   completedAt: Date;
// }


import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDto {
  @ApiProperty()
  email: string;

  completedAt: Date;
}
