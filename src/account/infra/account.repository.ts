import { GenericRepository } from 'src/global/infra/generic.repository';
import { AccountModel } from '../domain/account.model';
import { AccountDocument } from './account.schema';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose'; // Ensure Model is imported from mongoose

export class AccountRepository extends GenericRepository<
  AccountModel,
  AccountDocument
> {
  constructor(
    @InjectModel('Account')
    protected readonly model: Model<AccountDocument>,
  ) {
    super(model, AccountModel);
  }
}
