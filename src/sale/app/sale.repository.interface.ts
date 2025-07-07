import { IGenericRepository } from 'src/global/app/generic.repository.interface';
import { SaleModel } from '../domain/sale.model';

export interface ISaleRepository extends IGenericRepository<SaleModel> {}
