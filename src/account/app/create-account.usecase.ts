import { Inject } from '@nestjs/common';
import { IAccountRepository } from './account.repository.interface';

export class CreateAccountUsecase {
  constructor(
    @Inject('accountRepository')
    private accountRepository: IAccountRepository,
  ) {}

  async execute(data: any): Promise<any> {
    await this.accountRepository.create(data);
  }
}
