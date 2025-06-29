import { Inject } from '@nestjs/common';
import { IProductRepository } from './coupon.repository.interface';
import { PaginationResultDto } from 'src/global/app/dto/pagination-result.dto';
import { ProductDto } from './dto/coupon.dto';

export class GetAllUsecase {
  constructor(
    @Inject('couponRepository')
    private couponRepository: IProductRepository,
  ) {}

  async execute(): Promise<PaginationResultDto<ProductDto>> {
    const result = await this.couponRepository.findByQueryPaginated({});

    return {
      data: result.data.map((item) => ProductDto.transform(item)),
      meta: result.meta,
    };
  }
}
