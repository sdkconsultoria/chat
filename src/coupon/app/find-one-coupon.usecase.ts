import { Inject } from '@nestjs/common';
import { IProductRepository } from './coupon.repository.interface';
import { ProductModel } from '../domain/coupon.model';

export class FindOneProductUsecase {
  constructor(
    @Inject('couponRepository')
    private couponRepository: IProductRepository,
  ) {}

  async execute(query: any): Promise<ProductModel> {
    return await this.couponRepository.findOne(query);
  }
}
