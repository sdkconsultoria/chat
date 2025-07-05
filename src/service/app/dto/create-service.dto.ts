import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateServiceDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  price: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  duration: number;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsString()
  @IsOptional()
  includes: string;

  @IsString()
  @IsOptional()
  requirements: string;

  @IsString()
  @IsOptional()
  notes: string;
}
