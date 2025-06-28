import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserUsecase } from '../app/create-user.usecase';
import { CreateUserDto } from '../app/dto/create-user.dto';
import { GetAllUsecase } from '../app/get-all-user.usecase';
import { UpdateUserDto } from '../app/dto/update-user.dto';
import { UpdateUserUsecase } from '../app/update-user.usecase';
import { DeleteUserUsecase } from '../app/delete-user.usecase';
import { GetUserUsecase } from '../app/get-user.usecase';
import { Public } from 'src/auth/infra/decorators/public.decorator';

@Controller('user')
export class UserController {
  constructor(
    @Inject()
    private createTemplateUsecase: CreateUserUsecase,
    private updateUserUsecase: UpdateUserUsecase,
    private getAllUsecase: GetAllUsecase,
    private getUserUsecase: GetUserUsecase,
    private deleteUserUsecase: DeleteUserUsecase,
  ) {}

  @Get()
  async getAll(): Promise<any> {
    return await this.getAllUsecase.execute();
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<any> {
    return await this.getUserUsecase.execute(id);
  }

  @Public()
  @Post()
  async create(@Body() data: CreateUserDto): Promise<any> {
    return await this.createTemplateUsecase.execute(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateUserDto,
  ): Promise<any> {
    return await this.updateUserUsecase.execute(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return await this.deleteUserUsecase.execute(id);
  }
}
