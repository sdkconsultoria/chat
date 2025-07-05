import { BaseDto } from 'src/global/app/dto/base.dto';

export class ClientDto extends BaseDto {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  notes: string;
  type: string;
  status: string;
  lastVisit: Date;
  totalVisits: number;
  pets: Array<object>;
}
