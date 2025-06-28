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
import { CreateEmployeUsecase } from '../app/create-employe.usecase';
import { CreateEmployeDto } from '../app/dto/create-employe.dto';
import { GetAllUsecase } from '../app/get-all-employe.usecase';
import { UpdateEmployeDto } from '../app/dto/update-employe.dto';
import { UpdateEmployeUsecase } from '../app/update-employe.usecase';
import { DeleteEmployeUsecase } from '../app/delete-employe.usecase';
import { GetEmployeUsecase } from '../app/get-employe.usecase';

@Controller('employe')
export class EmployeController {
  constructor(
    @Inject()
    private createTemplateUsecase: CreateEmployeUsecase,
    private updateEmployeUsecase: UpdateEmployeUsecase,
    private getAllUsecase: GetAllUsecase,
    private getEmployeUsecase: GetEmployeUsecase,
    private deleteEmployeUsecase: DeleteEmployeUsecase,
  ) {}

  @Get()
  async getAll(): Promise<any> {
    return await this.getAllUsecase.execute();
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<any> {
    return await this.getEmployeUsecase.execute(id);
  }

  @Post()
  async create(@Body() data: CreateEmployeDto): Promise<any> {
    return await this.createTemplateUsecase.execute(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateEmployeDto,
  ): Promise<any> {
    return await this.updateEmployeUsecase.execute(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return await this.deleteEmployeUsecase.execute(id);
  }
}
