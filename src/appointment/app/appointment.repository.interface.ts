import { IGenericRepository } from 'src/global/app/generic.repository.interface';
import { AppointmentModel } from '../domain/appointment.model';

export interface IAppointmentRepository extends IGenericRepository<AppointmentModel> {}
