import { Inject } from '@nestjs/common';
import { ISaleRepository } from './sale.repository.interface';

export class GetSaleUsecase {
  constructor(
    @Inject('saleRepository')
    private saleRepository: ISaleRepository,
  ) {}

  async execute(id: string): Promise<any> {
    return await this.saleRepository.findOneById(id);
  }
}
