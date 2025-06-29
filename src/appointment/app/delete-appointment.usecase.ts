import { Inject } from '@nestjs/common';
import { IAppointmentRepository } from './appointment.repository.interface';

export class DeleteAppointmentUsecase {
  constructor(
    @Inject('appointmentRepository')
    private appointmentRepository: IAppointmentRepository,
  ) {}

  async execute(id: string): Promise<any> {
    await this.appointmentRepository.delete(id);
  }
}
