import { Inject } from '@nestjs/common';
import { IAppointmentRepository } from './appointment.repository.interface';

export class UpdateAppointmentUsecase {
  constructor(
    @Inject('appointmentRepository')
    private appointmentRepository: IAppointmentRepository,
  ) {}

  async execute(id: string, data: any): Promise<any> {
    await this.appointmentRepository.update(id, data);
  }
}
