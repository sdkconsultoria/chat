import { Inject } from '@nestjs/common';
import { IUserRepository } from './user.repository.interface';

export class DeleteUserUsecase {
  constructor(
    @Inject('userRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(id: string): Promise<any> {
    await this.userRepository.delete(id);
  }
}
