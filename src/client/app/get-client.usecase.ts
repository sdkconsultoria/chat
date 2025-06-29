import { Inject } from '@nestjs/common';
import { IClientRepository } from './client.repository.interface';

export class GetClientUsecase {
  constructor(
    @Inject('clientRepository')
    private clientRepository: IClientRepository,
  ) {}

  async execute(id: string): Promise<any> {
    return await this.clientRepository.findOneById(id);
  }
}
