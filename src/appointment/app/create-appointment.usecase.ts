import { Inject } from '@nestjs/common';
import { IAppointmentRepository } from './appointment.repository.interface';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { IUserRepository } from 'src/user/app/user.repository.interface';

export class CreateAppointmentUsecase {
  constructor(
    @Inject('appointmentRepository')
    private appointmentRepository: IAppointmentRepository,
    @Inject('userRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(createAppointmentDto: CreateAppointmentDto): Promise<any> {
    const user = await this.userRepository.create(createAppointmentDto);
    await this.appointmentRepository.create({
      ...createAppointmentDto,
      userId: user.id,
    });
  }
}
