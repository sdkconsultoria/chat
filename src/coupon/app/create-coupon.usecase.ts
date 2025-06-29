import { Inject } from '@nestjs/common';
import { IProductRepository } from './coupon.repository.interface';
import { CreateProductDto } from './dto/create-coupon.dto';
import { IUserRepository } from 'src/user/app/user.repository.interface';

export class CreateProductUsecase {
  constructor(
    @Inject('couponRepository')
    private couponRepository: IProductRepository,
    @Inject('userRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(createProductDto: CreateProductDto): Promise<any> {
    const user = await this.userRepository.create(createProductDto);
    await this.couponRepository.create({
      ...createProductDto,
      userId: user.id,
    });
  }
}
