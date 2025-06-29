import { Inject } from '@nestjs/common';
import { IServiceRepository } from './service.repository.interface';
import { ServiceModel } from '../domain/service.model';

export class FindOneServiceUsecase {
  constructor(
    @Inject('serviceRepository')
    private serviceRepository: IServiceRepository,
  ) {}

  async execute(query: any): Promise<ServiceModel> {
    return await this.serviceRepository.findOne(query);
  }
}
