import { Inject } from '@nestjs/common';
import { ISaleRepository } from './sale.repository.interface';
import { SaleModel } from '../domain/sale.model';

export class FindOneSaleUsecase {
  constructor(
    @Inject('saleRepository')
    private saleRepository: ISaleRepository,
  ) {}

  async execute(query: any): Promise<SaleModel> {
    return await this.saleRepository.findOne(query);
  }
}
