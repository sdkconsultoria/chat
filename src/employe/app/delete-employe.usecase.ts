import { Inject } from '@nestjs/common';
import { IEmployeRepository } from './employe.repository.interface';

export class DeleteEmployeUsecase {
  constructor(
    @Inject('employeRepository')
    private employeRepository: IEmployeRepository,
  ) {}

  async execute(id: string): Promise<any> {
    return await this.employeRepository.delete(id);
  }
}
