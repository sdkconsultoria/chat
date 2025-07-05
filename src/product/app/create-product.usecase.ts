import { Inject } from '@nestjs/common';
import { IProductRepository } from './product.repository.interface';
import { CreateProductDto } from './dto/create-product.dto';

export class CreateProductUsecase {
  constructor(
    @Inject('productRepository')
    private productRepository: IProductRepository,
  ) {}

  async execute(createProductDto: CreateProductDto): Promise<any> {
    return await this.productRepository.create(createProductDto);
  }
}
