import { Inject } from '@nestjs/common';
import { IProductRepository } from './product.repository.interface';
import { CreateProductDto } from './dto/create-product.dto';
import { IUserRepository } from 'src/user/app/user.repository.interface';

export class CreateProductUsecase {
  constructor(
    @Inject('productRepository')
    private productRepository: IProductRepository,
    @Inject('userRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(createProductDto: CreateProductDto): Promise<any> {
    const user = await this.userRepository.create(createProductDto);
    await this.productRepository.create({
      ...createProductDto,
      userId: user.id,
    });
  }
}
