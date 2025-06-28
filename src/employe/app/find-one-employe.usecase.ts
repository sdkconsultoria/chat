import { Inject } from '@nestjs/common';
import { IEmployeRepository } from './employe.repository.interface';
import { EmployeModel } from '../domain/employe.model';

export class FindOneEmployeUsecase {
  constructor(
    @Inject('employeRepository')
    private employeRepository: IEmployeRepository,
  ) {}

  async execute(query: any): Promise<EmployeModel> {
    return await this.employeRepository.findOne(query);
  }
}
