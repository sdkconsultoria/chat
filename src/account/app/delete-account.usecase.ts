import { Inject } from '@nestjs/common';
import { IAccountRepository } from './account.repository.interface';

export class DeleteAccountUsecase {
  constructor(
    @Inject('accountRepository')
    private accountRepository: IAccountRepository,
  ) {}

  async execute(id: string): Promise<any> {
    await this.accountRepository.delete(id);
  }
}
