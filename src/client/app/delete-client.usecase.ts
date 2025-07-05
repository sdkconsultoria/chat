import { Inject } from '@nestjs/common';
import { IClientRepository } from './client.repository.interface';

export class DeleteClientUsecase {
  constructor(
    @Inject('clientRepository')
    private clientRepository: IClientRepository,
  ) {}

  async execute(id: string): Promise<any> {
    return await this.clientRepository.delete(id);
  }
}
