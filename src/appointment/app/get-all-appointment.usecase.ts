import { Inject } from '@nestjs/common';
import { IAppointmentRepository } from './appointment.repository.interface';
import { PaginationResultDto } from 'src/global/app/dto/pagination-result.dto';
import { AppointmentDto } from './dto/appointment.dto';

export class GetAllUsecase {
  constructor(
    @Inject('appointmentRepository')
    private appointmentRepository: IAppointmentRepository,
  ) {}

  async execute(): Promise<PaginationResultDto<AppointmentDto>> {
    const result = await this.appointmentRepository.findByQueryPaginated({});

    return {
      data: result.data.map((item) => AppointmentDto.transform(item)),
      meta: result.meta,
    };
  }
}
