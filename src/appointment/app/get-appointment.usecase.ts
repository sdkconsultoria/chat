import { Inject } from '@nestjs/common';
import { IAppointmentRepository } from './appointment.repository.interface';

export class GetAppointmentUsecase {
  constructor(
    @Inject('appointmentRepository')
    private appointmentRepository: IAppointmentRepository,
  ) {}

  async execute(id: string): Promise<any> {
    return await this.appointmentRepository.findOneById(id);
  }
}
