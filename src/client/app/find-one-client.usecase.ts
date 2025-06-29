import { Inject } from '@nestjs/common';
import { IClientRepository } from './client.repository.interface';
import { ClientModel } from '../domain/client.model';

export class FindOneClientUsecase {
  constructor(
    @Inject('clientRepository')
    private clientRepository: IClientRepository,
  ) {}

  async execute(query: any): Promise<ClientModel> {
    return await this.clientRepository.findOne(query);
  }
}
