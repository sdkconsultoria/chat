import { Inject } from '@nestjs/common';
import { IUserRepository } from './user.repository.interface';

export class UpdateUserUsecase {
  constructor(
    @Inject('userRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(id: string, data: any): Promise<any> {
    await this.userRepository.update(id, data);
  }
}
