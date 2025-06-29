import { GenericRepository } from 'src/global/infra/generic.repository';
import { ClientModel } from '../domain/client.model';
import { ClientDocument } from './client.schema';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose'; // Ensure Model is imported from mongoose

export class ClientRepository extends GenericRepository<
  ClientModel,
  ClientDocument
> {
  constructor(
    @InjectModel('Client')
    protected readonly model: Model<ClientDocument>,
  ) {
    super(model, ClientModel);
  }
}
