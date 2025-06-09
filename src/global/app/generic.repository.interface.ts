import { PaginationResultDto } from './dto/pagination-result.dto';
// import { FilterQuery } from 'mongoose';

export interface IGenericRepository<T> {
  findByQueryPaginated(
    query: any,
    page?: number,
  ): Promise<PaginationResultDto<T>>;
  countByQuery(query: any): Promise<number>;
  findByQuery(query: any, page?: number): Promise<T[]>;
  findOne(item: string): Promise<T>;
  create(item: any): Promise<T>;
  update(id: string, item: any): Promise<T>;
  delete(item: any): Promise<T>;
}
