import { Inject } from '@nestjs/common';
import { IUserRepository } from 'src/user/app/user.repository.interface';
import * as bcrypt from 'bcrypt';
import { RegisterUserDto } from './register-user.dto';

export class RegisterUserUsecase {
  constructor(
    @Inject('userRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(registerUserDto: RegisterUserDto): Promise<void> {
    const hashedPassword = await bcrypt.hash(registerUserDto.password, 10);

    await this.userRepository.create({
      ...registerUserDto,
      password: hashedPassword,
    });
  }
}
