import { Inject } from '@nestjs/common';
import { IClientRepository } from './client.repository.interface';
import { CreateClientDto } from './dto/create-client.dto';

export class CreateClientUsecase {
  constructor(
    @Inject('clientRepository')
    private clientRepository: IClientRepository,
  ) {}

  async execute(createClientDto: CreateClientDto): Promise<any> {
    return await this.clientRepository.create(createClientDto);
  }
}
