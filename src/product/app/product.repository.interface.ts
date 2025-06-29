import { IGenericRepository } from 'src/global/app/generic.repository.interface';
import { ProductModel } from '../domain/product.model';

export interface IProductRepository extends IGenericRepository<ProductModel> {}
