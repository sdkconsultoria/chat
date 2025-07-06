import { Inject } from '@nestjs/common';
import { IAppointmentRepository } from './appointment.repository.interface';
import { CreateAppointmentDto } from './dto/create-appointment.dto';

export class CreateAppointmentUsecase {
  constructor(
    @Inject('appointmentRepository')
    private appointmentRepository: IAppointmentRepository,
  ) {}

  async execute(createAppointmentDto: CreateAppointmentDto): Promise<any> {
    return await this.appointmentRepository.create(createAppointmentDto);
  }
}
