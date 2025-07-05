import { Inject } from '@nestjs/common';
import { IServiceRepository } from './service.repository.interface';

export class UpdateServiceUsecase {
  constructor(
    @Inject('serviceRepository')
    private serviceRepository: IServiceRepository,
  ) {}

  async execute(id: string, data: any): Promise<any> {
    return await this.serviceRepository.update(id, data);
  }
}
