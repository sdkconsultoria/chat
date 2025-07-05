import { Inject } from '@nestjs/common';
import { IServiceRepository } from './service.repository.interface';
import { CreateServiceDto } from './dto/create-service.dto';

export class CreateServiceUsecase {
  constructor(
    @Inject('serviceRepository')
    private serviceRepository: IServiceRepository,
  ) {}

  async execute(createServiceDto: CreateServiceDto): Promise<any> {
    return await this.serviceRepository.create(createServiceDto);
  }
}
