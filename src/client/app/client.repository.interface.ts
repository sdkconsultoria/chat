import { IGenericRepository } from 'src/global/app/generic.repository.interface';
import { ClientModel } from '../domain/client.model';

export interface IClientRepository extends IGenericRepository<ClientModel> {}
