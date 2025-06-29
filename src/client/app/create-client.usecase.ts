import { Inject } from '@nestjs/common';
import { IClientRepository } from './client.repository.interface';
import { CreateClientDto } from './dto/create-client.dto';
import { IUserRepository } from 'src/user/app/user.repository.interface';

export class CreateClientUsecase {
  constructor(
    @Inject('clientRepository')
    private clientRepository: IClientRepository,
    @Inject('userRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(createClientDto: CreateClientDto): Promise<any> {
    const user = await this.userRepository.create(createClientDto);
    await this.clientRepository.create({
      ...createClientDto,
      userId: user.id,
    });
  }
}
