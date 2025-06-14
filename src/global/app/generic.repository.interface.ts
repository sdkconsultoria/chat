import { PaginationResultDto } from './dto/pagination-result.dto';
import { FilterQuery } from 'mongoose';

export interface IGenericRepository<TModel> {
  findByQueryPaginated(
    query: any,
    page?: number,
  ): Promise<PaginationResultDto<TModel>>;
  countByQuery(query: FilterQuery<any>): Promise<number>;
  findByQuery(query: FilterQuery<any>, page?: number): Promise<TModel[]>;
  findOne(query: FilterQuery<any>): Promise<TModel>;
  findOneById(item: string): Promise<TModel>;
  create<T>(item: T): Promise<TModel>;
  update<T>(id: string, item: T): Promise<TModel>;
  delete(item: string): Promise<TModel>;
}
