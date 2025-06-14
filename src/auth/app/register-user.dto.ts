import { CreateUserDto } from 'src/user/app/dto/create-user.dto';

// export type RegisterDtoTyoe = Omit<CreateUserDto, 'lastName2' | 'profilePicture'>;

export class RegisterUserDto extends CreateUserDto {}
