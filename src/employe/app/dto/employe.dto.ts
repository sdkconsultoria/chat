import { BaseDto } from 'src/global/app/dto/base.dto';

export class EmployeDto extends BaseDto {
  id: string;
  name: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  startDate: string;
  emergencyPhone: string;
  address: string;
  salary: string;
  notes: string;
  emergencyContact: string;
  status: string;
}
