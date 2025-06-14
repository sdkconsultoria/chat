import { GenericRepository } from 'src/global/infra/generic.repository';
import { UserModel } from '../domain/user.model';
import { UserDocument } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose'; // Ensure Model is imported from mongoose

export class UserRepository extends GenericRepository<
  UserModel,
  UserDocument
> {
  constructor(
    @InjectModel('User')
    protected readonly model: Model<UserDocument>,
  ) {
    super(model, UserModel);
  }
}
