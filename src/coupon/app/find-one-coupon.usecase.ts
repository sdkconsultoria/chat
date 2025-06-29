import { Inject } from '@nestjs/common';
import { IProductRepository } from './product.repository.interface';
import { ProductModel } from '../domain/product.model';

export class FindOneProductUsecase {
  constructor(
    @Inject('productRepository')
    private productRepository: IProductRepository,
  ) {}

  async execute(query: any): Promise<ProductModel> {
    return await this.productRepository.findOne(query);
  }
}
