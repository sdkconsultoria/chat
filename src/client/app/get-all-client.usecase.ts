import { Inject } from '@nestjs/common';
import { IClientRepository } from './client.repository.interface';
import { PaginationResultDto } from 'src/global/app/dto/pagination-result.dto';
import { ClientDto } from './dto/client.dto';

export class GetAllUsecase {
  constructor(
    @Inject('clientRepository')
    private clientRepository: IClientRepository,
  ) {}

  async execute(): Promise<PaginationResultDto<ClientDto>> {
    const result = await this.clientRepository.findByQueryPaginated({});

    return {
      data: result.data.map((item) => ClientDto.transform(item)),
      meta: result.meta,
    };
  }
}
