import { Inject } from '@nestjs/common';
import { IProductRepository } from './product.repository.interface';
import { PaginationResultDto } from 'src/global/app/dto/pagination-result.dto';
import { ProductDto } from './dto/product.dto';

export class GetAllUsecase {
  constructor(
    @Inject('productRepository')
    private productRepository: IProductRepository,
  ) {}

  async execute(): Promise<PaginationResultDto<ProductDto>> {
    const result = await this.productRepository.findByQueryPaginated({});

    return {
      data: result.data.map((item) => ProductDto.transform(item)),
      meta: result.meta,
    };
  }
}
