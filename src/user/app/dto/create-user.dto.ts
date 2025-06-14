import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Match } from 'src/global/infra/decorators/match.decorator';
import { IsEmailUnique } from 'src/user/infra/decorators/is-email-unique.decorator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Name should not be empty' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Last name should not be empty' })
  lastname: string;

  @IsString()
  @IsOptional()
  lastname2: string;

  @IsEmail({}, { message: 'Invalid email address' })
  @IsEmailUnique({ message: 'Email already exists' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Password should not be empty' })
  @MinLength(8)
  password: string;

  @IsString()
  @IsNotEmpty({ message: 'PasswordConfirmation should not be empty' })
  @MinLength(8)
  @Match('password', { message: 'Passwords do not match' })
  passwordConfirmation: string;

  @IsString()
  @IsOptional()
  profilePicture: string;
}
