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
  @IsNotEmpty()
  cart: any;

  @IsNotEmpty()
  @IsString()
  paymentMethod: string = '';

  @Transform(({ value }) => Number(value))
  @IsNumber()
  amountPaid: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  change: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  total: number;

  @IsObject()
  @IsNotEmptyObject()
  client: object = {};
}
