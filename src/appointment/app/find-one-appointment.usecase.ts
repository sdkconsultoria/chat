import { Inject } from '@nestjs/common';
import { IAppointmentRepository } from './appointment.repository.interface';
import { AppointmentModel } from '../domain/appointment.model';

export class FindOneAppointmentUsecase {
  constructor(
    @Inject('appointmentRepository')
    private appointmentRepository: IAppointmentRepository,
  ) {}

  async execute(query: any): Promise<AppointmentModel> {
    return await this.appointmentRepository.findOne(query);
  }
}
