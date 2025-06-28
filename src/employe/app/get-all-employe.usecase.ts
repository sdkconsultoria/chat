import { Inject } from '@nestjs/common';
import { IEmployeRepository } from './employe.repository.interface';
import { PaginationResultDto } from 'src/global/app/dto/pagination-result.dto';
import { EmployeDto } from './dto/employe.dto';

export class GetAllUsecase {
  constructor(
    @Inject('employeRepository')
    private employeRepository: IEmployeRepository,
  ) {}

  async execute(): Promise<PaginationResultDto<EmployeDto>> {
    const result = await this.employeRepository.findByQueryPaginated({});

    return {
      data: result.data.map((item) => EmployeDto.transform(item)),
      meta: result.meta,
    };
  }
}
