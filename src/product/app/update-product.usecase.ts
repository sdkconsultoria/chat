import { Inject } from '@nestjs/common';
import { IProductRepository } from './product.repository.interface';

export class UpdateProductUsecase {
  constructor(
    @Inject('productRepository')
    private productRepository: IProductRepository,
  ) {}

  async execute(id: string, data: any): Promise<any> {
    return await this.productRepository.update(id, data);
  }
}
