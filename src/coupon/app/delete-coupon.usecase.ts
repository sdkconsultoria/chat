import { Inject } from '@nestjs/common';
import { IProductRepository } from './coupon.repository.interface';

export class DeleteProductUsecase {
  constructor(
    @Inject('couponRepository')
    private couponRepository: IProductRepository,
  ) {}

  async execute(id: string): Promise<any> {
    await this.couponRepository.delete(id);
  }
}
