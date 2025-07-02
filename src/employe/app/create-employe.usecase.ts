import { Inject } from '@nestjs/common';
import { IEmployeRepository } from './employe.repository.interface';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { EmployeModel } from '../domain/employe.model';

export class CreateEmployeUsecase {
  constructor(
    @Inject('employeRepository')
    private employeRepository: IEmployeRepository,
  ) {}

  async execute(createEmployeDto: CreateEmployeDto): Promise<EmployeModel> {
    return await this.employeRepository.create(createEmployeDto);
  }
}
