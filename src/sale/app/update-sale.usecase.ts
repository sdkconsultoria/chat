import { Inject } from '@nestjs/common';
import { ISaleRepository } from './sale.repository.interface';

export class UpdateSaleUsecase {
  constructor(
    @Inject('saleRepository')
    private saleRepository: ISaleRepository,
  ) {}

  async execute(id: string, data: any): Promise<any> {
    return await this.saleRepository.update(id, data);
  }
}
