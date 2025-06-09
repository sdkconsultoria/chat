import { Inject } from '@nestjs/common';
import { IAccountRepository } from './account.repository.interface';

export class UpdateAccountUsecase {
  constructor(
    @Inject('accountRepository')
    private accountRepository: IAccountRepository,
  ) {}

  async execute(id: string, data: any): Promise<any> {
    await this.accountRepository.update(id, data);
  }
}
