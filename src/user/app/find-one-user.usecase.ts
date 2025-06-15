import { Inject } from '@nestjs/common';
import { IUserRepository } from './user.repository.interface';
import { UserModel } from '../domain/user.model';

export class FindOneUserUsecase {
  constructor(
    @Inject('userRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(query: any): Promise<UserModel> {
    return await this.userRepository.findOne(query);
  }
}
