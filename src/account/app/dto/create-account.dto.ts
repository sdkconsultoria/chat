import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateAccountDto {
  @IsString()
  @IsNotEmpty({ message: 'Name should not be empty' })
  name: string;

  @IsEnum(['CLIENT', 'RESELLER'])
  type: 'CLIENT' | 'RESELLER';

  @IsEmail({}, { message: 'Invalid email address' })
  email: string;
}
