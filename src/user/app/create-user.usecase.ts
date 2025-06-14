import { Inject } from '@nestjs/common';
import { IUserRepository } from './user.repository.interface';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

export class CreateUserUsecase {
  constructor(
    @Inject('userRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(createUserDto: CreateUserDto): Promise<any> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    await this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });
  }
}
