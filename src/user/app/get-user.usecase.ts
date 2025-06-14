import { Inject } from '@nestjs/common';
import { IUserRepository } from './user.repository.interface';

export class GetUserUsecase {
  constructor(
    @Inject('userRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(id: string): Promise<any> {
    return await this.userRepository.findOneById(id);
  }
}
