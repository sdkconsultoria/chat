import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Match } from 'src/global/infra/decorators/match.decorator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Name should not be empty' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Last name should not be empty' })
  lastName: string;

  @IsString()
  lastName2: string;

  @IsEmail({}, { message: 'Invalid email address' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Password should not be empty' })
  @MinLength(8)
  password: string;

  @IsString()
  @IsNotEmpty({ message: 'Password confirmation should not be empty' })
  @MinLength(8)
  @Match('password', { message: 'Passwords do not match' })
  passwordConfirmation: string;

  @IsString()
  profilePicture: string;
}
