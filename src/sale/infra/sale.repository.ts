import { GenericRepository } from 'src/global/infra/generic.repository';
import { SaleModel } from '../domain/sale.model';
import { SaleDocument } from './sale.schema';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose'; // Ensure Model is imported from mongoose

export class SaleRepository extends GenericRepository<SaleModel, SaleDocument> {
  constructor(
    @InjectModel('Sale')
    protected readonly model: Model<SaleDocument>,
  ) {
    super(model, SaleModel);
  }
}
