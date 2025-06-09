import { BaseDto } from 'src/global/app/dto/base.dto';

export class AccountDto extends BaseDto {
  id: string;
  name: string;
  email: string;
  type: string;
}
