import { Type } from 'class-transformer';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateEmployeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsNumber()
  @IsOptional()
  salary: number;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  startDate: Date;

  @IsString()
  @IsOptional()
  emergencyContact: string;

  @IsString()
  @IsOptional()
  emergencyPhone: string;

  @IsString()
  @IsOptional()
  notes: string;
}
