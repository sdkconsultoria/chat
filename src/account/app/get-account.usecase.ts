import { Inject } from '@nestjs/common';
import { IAccountRepository } from './account.repository.interface';

export class GetAccountUsecase {
  constructor(
    @Inject('accountRepository')
    private accountRepository: IAccountRepository,
  ) {}

  async execute(id: string): Promise<any> {
    return await this.accountRepository.findOne(id);
  }
}
