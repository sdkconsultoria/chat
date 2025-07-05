import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  price: number;

  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  status: string;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  stock: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  minStock: number;

  @IsString()
  @IsNotEmpty()
  sku: string;

  @IsString()
  @IsOptional()
  barcode: string;
}
