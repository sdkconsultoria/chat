import { IGenericRepository } from 'src/global/app/generic.repository.interface';
import { ServiceModel } from '../domain/service.model';

export interface IServiceRepository extends IGenericRepository<ServiceModel> {}
