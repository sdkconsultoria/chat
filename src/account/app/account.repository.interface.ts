import { IGenericRepository } from 'src/global/app/generic.repository.interface';
import { AccountModel } from '../domain/account.model';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IAccountRepository extends IGenericRepository<AccountModel> {}
