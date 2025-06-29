import { BaseDto } from 'src/global/app/dto/base.dto';

export class ProductDto extends BaseDto {
  id: string;
  name: string;
  email: string;
  type: string;
}
