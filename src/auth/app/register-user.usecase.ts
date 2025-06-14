import { Inject } from '@nestjs/common';
import { IUserRepository } from 'src/user/app/user.repository.interface';

export class RegisterUserUsecase {
  constructor(
    @Inject('userRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(data: any): Promise<any> {
    await this.userRepository.create(data);
  }
}
