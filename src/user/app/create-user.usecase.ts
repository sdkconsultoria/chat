import { Inject } from '@nestjs/common';
import { IUserRepository } from './user.repository.interface';

export class CreateUserUsecase {
  constructor(
    @Inject('userRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(data: any): Promise<any> {
    await this.userRepository.create(data);
  }
}
