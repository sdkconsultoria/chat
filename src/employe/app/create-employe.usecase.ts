import { Inject } from '@nestjs/common';
import { IEmployeRepository } from './employe.repository.interface';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { IUserRepository } from 'src/user/app/user.repository.interface';

export class CreateEmployeUsecase {
  constructor(
    @Inject('employeRepository')
    private employeRepository: IEmployeRepository,
    @Inject('userRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(createEmployeDto: CreateEmployeDto): Promise<any> {
    const user = await this.userRepository.create(createEmployeDto);
    await this.employeRepository.create({
      ...createEmployeDto,
      userId: user.id,
    });
  }
}
