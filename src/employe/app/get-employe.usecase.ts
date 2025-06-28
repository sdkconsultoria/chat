import { Inject } from '@nestjs/common';
import { IEmployeRepository } from './employe.repository.interface';

export class GetEmployeUsecase {
  constructor(
    @Inject('employeRepository')
    private employeRepository: IEmployeRepository,
  ) {}

  async execute(id: string): Promise<any> {
    return await this.employeRepository.findOneById(id);
  }
}
