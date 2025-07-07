import { Inject } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { ISaleRepository } from './sale.repository.interface';

export class CreateSaleUsecase {
  constructor(
    @Inject('saleRepository')
    private saleRepository: ISaleRepository,
  ) {}

  async execute(createSaleDto: CreateSaleDto): Promise<any> {
    return await this.saleRepository.create(createSaleDto);
  }
}
