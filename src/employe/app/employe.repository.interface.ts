import { IGenericRepository } from 'src/global/app/generic.repository.interface';
import { EmployeModel } from '../domain/employe.model';

export interface IEmployeRepository extends IGenericRepository<EmployeModel> {}
