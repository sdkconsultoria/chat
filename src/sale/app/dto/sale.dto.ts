import { BaseDto } from 'src/global/app/dto/base.dto';

export class SaleDto extends BaseDto {
  id: string = '';
  cart: CartItem[] = [];
  paymentMethod: string = '';
  setAmountPaid: number = 0;
  change: number = 0;
  total: number = 0;
  client: object = {};
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  updates: Array<Date>;
  status: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  type: 'service' | 'product';
}
