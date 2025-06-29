import { Inject } from '@nestjs/common';
import { IServiceRepository } from './service.repository.interface';

export class GetServiceUsecase {
  constructor(
    @Inject('serviceRepository')
    private serviceRepository: IServiceRepository,
  ) {}

  async execute(id: string): Promise<any> {
    return await this.serviceRepository.findOneById(id);
  }
}
