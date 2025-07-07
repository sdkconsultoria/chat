import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { CartItem } from './sale.dto';

export class CreateSaleDto {
  @IsArray()
  @IsNotEmpty()
  cart: CartItem[] = [];

  @IsNotEmpty()
  @IsString()
  paymentMethod: string = '';

  @Transform(({ value }) => Number(value))
  @IsNumber()
  setAmountPaid: number = 0;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  change: number = 0;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  total: number = 0;

  @IsObject()
  @IsNotEmptyObject()
  client: object = {};

  @IsString()
  @IsNotEmpty()
  status: string;
}
