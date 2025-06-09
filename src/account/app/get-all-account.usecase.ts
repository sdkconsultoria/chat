import { Inject } from '@nestjs/common';
import { IAccountRepository } from './account.repository.interface';
import { PaginationResultDto } from 'src/global/app/dto/pagination-result.dto';
import { AccountDto } from './dto/account.dto';

export class GetAllUsecase {
  constructor(
    @Inject('accountRepository')
    private accountRepository: IAccountRepository,
  ) {}

  async execute(): Promise<PaginationResultDto<AccountDto>> {
    const result = await this.accountRepository.findByQueryPaginated({});

    return {
      data: result.data.map((item) => AccountDto.transform(item)),
      meta: result.meta,
    };
  }
}
