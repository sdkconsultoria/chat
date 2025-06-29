import { Inject } from '@nestjs/common';
import { IProductRepository } from './product.repository.interface';

export class GetProductUsecase {
  constructor(
    @Inject('productRepository')
    private productRepository: IProductRepository,
  ) {}

  async execute(id: string): Promise<any> {
    return await this.productRepository.findOneById(id);
  }
}
