import { Inject } from '@nestjs/common';
import { PaginationResultDto } from 'src/global/app/dto/pagination-result.dto';
import { SaleDto } from './dto/sale.dto';
import { ISaleRepository } from './sale.repository.interface';

export class GetAllUsecase {
  constructor(
    @Inject('saleRepository')
    private saleRepository: ISaleRepository,
  ) {}

  async execute(): Promise<PaginationResultDto<SaleDto>> {
    const result = await this.saleRepository.findByQueryPaginated({});

    return {
      data: result.data.map((item) => SaleDto.transform(item)),
      meta: result.meta,
    };
  }
}
