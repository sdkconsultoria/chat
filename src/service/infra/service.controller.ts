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
import { CreateServiceUsecase } from '../app/create-service.usecase';
import { CreateServiceDto } from '../app/dto/create-service.dto';
import { GetAllUsecase } from '../app/get-all-service.usecase';
import { UpdateServiceDto } from '../app/dto/update-service.dto';
import { UpdateServiceUsecase } from '../app/update-service.usecase';
import { DeleteServiceUsecase } from '../app/delete-service.usecase';
import { GetServiceUsecase } from '../app/get-service.usecase';

@Controller('service')
export class ServiceController {
  constructor(
    @Inject()
    private createTemplateUsecase: CreateServiceUsecase,
    private updateServiceUsecase: UpdateServiceUsecase,
    private getAllUsecase: GetAllUsecase,
    private getServiceUsecase: GetServiceUsecase,
    private deleteServiceUsecase: DeleteServiceUsecase,
  ) {}

  @Get()
  async getAll(): Promise<any> {
    return await this.getAllUsecase.execute();
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<any> {
    return await this.getServiceUsecase.execute(id);
  }

  @Post()
  async create(@Body() data: CreateServiceDto): Promise<any> {
    return await this.createTemplateUsecase.execute(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateServiceDto,
  ): Promise<any> {
    return await this.updateServiceUsecase.execute(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return await this.deleteServiceUsecase.execute(id);
  }
}
