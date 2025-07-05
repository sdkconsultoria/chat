import { BaseDto } from 'src/global/app/dto/base.dto';

export class ServiceDto extends BaseDto {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  category: string;
  status: string;
  includes: string;
  requirements: string;
  notes: string;
  popularity: number;
}
