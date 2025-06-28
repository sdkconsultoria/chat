import { Inject } from '@nestjs/common';
import { IEmployeRepository } from './employe.repository.interface';

export class UpdateEmployeUsecase {
  constructor(
    @Inject('employeRepository')
    private employeRepository: IEmployeRepository,
  ) {}

  async execute(id: string, data: any): Promise<any> {
    await this.employeRepository.update(id, data);
  }
}
