import { Inject } from '@nestjs/common';
import { IUserRepository } from './user.repository.interface';
import { PaginationResultDto } from 'src/global/app/dto/pagination-result.dto';
import { UserDto } from './dto/user.dto';

export class GetAllUsecase {
  constructor(
    @Inject('userRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(): Promise<PaginationResultDto<UserDto>> {
    const result = await this.userRepository.findByQueryPaginated({});

    return {
      data: result.data.map((item) => UserDto.transform(item)),
      meta: result.meta,
    };
  }
}
