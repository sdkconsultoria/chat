import { IGenericRepository } from 'src/global/app/generic.repository.interface';
import { UserModel } from '../domain/user.model';

export interface IUserRepository extends IGenericRepository<UserModel> {}
