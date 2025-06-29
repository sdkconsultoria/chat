import { Inject } from '@nestjs/common';
import { IProductRepository } from './coupon.repository.interface';

export class UpdateProductUsecase {
  constructor(
    @Inject('couponRepository')
    private couponRepository: IProductRepository,
  ) {}

  async execute(id: string, data: any): Promise<any> {
    await this.couponRepository.update(id, data);
  }
}
