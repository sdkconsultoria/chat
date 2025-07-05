import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Transform } from 'class-transformer';

class CreatePetDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  breed: string;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  age: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  weight: number;

  @IsString()
  @IsOptional()
  color: string;

  @IsString()
  @IsOptional()
  notes: string;
}

export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsEmail()
  @IsOptional()
  @Transform(({ value }: { value: string }) => (value === '' ? null : value))
  email: string;

  @IsString()
  @IsOptional()
  type: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsString()
  @IsOptional()
  notes: string;

  @ValidateNested({ each: true })
  @Type(() => CreatePetDto)
  pets: Array<CreatePetDto>;
}
