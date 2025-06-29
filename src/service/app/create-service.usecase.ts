import { Inject } from '@nestjs/common';
import { IServiceRepository } from './service.repository.interface';
import { CreateServiceDto } from './dto/create-service.dto';
import { IUserRepository } from 'src/user/app/user.repository.interface';

export class CreateServiceUsecase {
  constructor(
    @Inject('serviceRepository')
    private serviceRepository: IServiceRepository,
    @Inject('userRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(createServiceDto: CreateServiceDto): Promise<any> {
    const user = await this.userRepository.create(createServiceDto);
    await this.serviceRepository.create({
      ...createServiceDto,
      userId: user.id,
    });
  }
}
