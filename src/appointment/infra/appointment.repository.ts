import { GenericRepository } from 'src/global/infra/generic.repository';
import { AppointmentModel } from '../domain/appointment.model';
import { AppointmentDocument } from './appointment.schema';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose'; // Ensure Model is imported from mongoose

export class AppointmentRepository extends GenericRepository<
  AppointmentModel,
  AppointmentDocument
> {
  constructor(
    @InjectModel('Appointment')
    protected readonly model: Model<AppointmentDocument>,
  ) {
    super(model, AppointmentModel);
  }
}
