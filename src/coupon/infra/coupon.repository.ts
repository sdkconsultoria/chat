import { GenericRepository } from 'src/global/infra/generic.repository';
import { ProductModel } from '../domain/coupon.model';
import { ProductDocument } from './coupon.schema';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose'; // Ensure Model is imported from mongoose

export class ProductRepository extends GenericRepository<
  ProductModel,
  ProductDocument
> {
  constructor(
    @InjectModel('Product')
    protected readonly model: Model<ProductDocument>,
  ) {
    super(model, ProductModel);
  }
}
