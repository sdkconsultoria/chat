import { Inject } from '@nestjs/common';
import { IServiceRepository } from './service.repository.interface';
import { PaginationResultDto } from 'src/global/app/dto/pagination-result.dto';
import { ServiceDto } from './dto/service.dto';

export class GetAllUsecase {
  constructor(
    @Inject('serviceRepository')
    private serviceRepository: IServiceRepository,
  ) {}

  async execute(): Promise<PaginationResultDto<ServiceDto>> {
    const result = await this.serviceRepository.findByQueryPaginated({});

    return {
      data: result.data.map((item) => ServiceDto.transform(item)),
      meta: result.meta,
    };
  }
}
