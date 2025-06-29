import { Inject } from '@nestjs/common';
import { IClientRepository } from './client.repository.interface';

export class UpdateClientUsecase {
  constructor(
    @Inject('clientRepository')
    private clientRepository: IClientRepository,
  ) {}

  async execute(id: string, data: any): Promise<any> {
    await this.clientRepository.update(id, data);
  }
}
