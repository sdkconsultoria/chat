import { Type } from 'class-transformer';
import {
  IsDate,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateAppointmentDto {
  @IsObject()
  @IsNotEmptyObject()
  client: object;

  @IsObject()
  @IsNotEmptyObject()
  pet: object;

  @IsObject()
  @IsNotEmptyObject()
  service: object;

  @Type(() => Date) // Convierte el string a Date
  @IsDate()
  @IsNotEmpty()
  date: Date;

  @IsString()
  @IsNotEmpty()
  time: string;

  @IsOptional()
  @IsString()
  employee: string;

  @IsString()
  @IsOptional()
  notes: string;
}
