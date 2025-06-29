import { Inject } from '@nestjs/common';
import { IServiceRepository } from './service.repository.interface';

export class DeleteServiceUsecase {
  constructor(
    @Inject('serviceRepository')
    private serviceRepository: IServiceRepository,
  ) {}

  async execute(id: string): Promise<any> {
    await this.serviceRepository.delete(id);
  }
}
