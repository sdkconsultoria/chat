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
import { CreateAppointmentUsecase } from '../app/create-appointment.usecase';
import { CreateAppointmentDto } from '../app/dto/create-appointment.dto';
import { GetAllUsecase } from '../app/get-all-appointment.usecase';
import { UpdateAppointmentDto } from '../app/dto/update-appointment.dto';
import { UpdateAppointmentUsecase } from '../app/update-appointment.usecase';
import { DeleteAppointmentUsecase } from '../app/delete-appointment.usecase';
import { GetAppointmentUsecase } from '../app/get-appointment.usecase';

@Controller('appointment')
export class AppointmentController {
  constructor(
    @Inject()
    private createTemplateUsecase: CreateAppointmentUsecase,
    private updateAppointmentUsecase: UpdateAppointmentUsecase,
    private getAllUsecase: GetAllUsecase,
    private getAppointmentUsecase: GetAppointmentUsecase,
    private deleteAppointmentUsecase: DeleteAppointmentUsecase,
  ) {}

  @Get()
  async getAll(): Promise<any> {
    return await this.getAllUsecase.execute();
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<any> {
    return await this.getAppointmentUsecase.execute(id);
  }

  @Post()
  async create(@Body() data: CreateAppointmentDto): Promise<any> {
    return await this.createTemplateUsecase.execute(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateAppointmentDto,
  ): Promise<any> {
    return await this.updateAppointmentUsecase.execute(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return await this.deleteAppointmentUsecase.execute(id);
  }
}
