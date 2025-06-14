import { Inject } from '@nestjs/common';
import { IUserRepository } from './user.repository.interface';

export class FindOneUserUsecase {
  constructor(
    @Inject('userRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(query: any): Promise<any> {
    return await this.userRepository.findOne(query);
  }
}
