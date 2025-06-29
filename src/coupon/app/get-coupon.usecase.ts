import { Inject } from '@nestjs/common';
import { IProductRepository } from './coupon.repository.interface';

export class GetProductUsecase {
  constructor(
    @Inject('couponRepository')
    private couponRepository: IProductRepository,
  ) {}

  async execute(id: string): Promise<any> {
    return await this.couponRepository.findOneById(id);
  }
}
