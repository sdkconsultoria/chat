import { Inject } from '@nestjs/common';
import { IProductRepository } from './product.repository.interface';

export class DeleteProductUsecase {
  constructor(
    @Inject('productRepository')
    private productRepository: IProductRepository,
  ) {}

  async execute(id: string): Promise<any> {
    return await this.productRepository.delete(id);
  }
}
