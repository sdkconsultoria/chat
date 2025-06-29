import { GenericRepository } from 'src/global/infra/generic.repository';
import { ServiceModel } from '../domain/service.model';
import { ServiceDocument } from './service.schema';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose'; // Ensure Model is imported from mongoose

export class ServiceRepository extends GenericRepository<
  ServiceModel,
  ServiceDocument
> {
  constructor(
    @InjectModel('Service')
    protected readonly model: Model<ServiceDocument>,
  ) {
    super(model, ServiceModel);
  }
}
