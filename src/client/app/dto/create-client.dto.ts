import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateUserDto } from 'src/user/app/dto/create-user.dto';

export class CreateClientDto extends CreateUserDto {
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

  @IsDate()
  @IsOptional()
  hireDate: Date;
}
