import { BaseDto } from 'src/global/app/dto/base.dto';

export class AppointmentDto extends BaseDto {
  id: string;
  client: object;
  pet: object;
  service: object;
  date: Date;
  time: string;
  status: string;
  employee: string;
  notes: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  updates: Array<Date>;
}
