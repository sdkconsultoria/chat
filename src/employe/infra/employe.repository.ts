import { GenericRepository } from 'src/global/infra/generic.repository';
import { EmployeModel } from '../domain/employe.model';
import { EmployeDocument } from './employe.schema';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose'; // Ensure Model is imported from mongoose

export class EmployeRepository extends GenericRepository<
  EmployeModel,
  EmployeDocument
> {
  constructor(
    @InjectModel('Employe')
    protected readonly model: Model<EmployeDocument>,
  ) {
    super(model, EmployeModel);
  }
}
