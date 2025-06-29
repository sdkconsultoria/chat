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
import { CreateClientUsecase } from '../app/create-client.usecase';
import { CreateClientDto } from '../app/dto/create-client.dto';
import { GetAllUsecase } from '../app/get-all-client.usecase';
import { UpdateClientDto } from '../app/dto/update-client.dto';
import { UpdateClientUsecase } from '../app/update-client.usecase';
import { DeleteClientUsecase } from '../app/delete-client.usecase';
import { GetClientUsecase } from '../app/get-client.usecase';

@Controller('client')
export class ClientController {
  constructor(
    @Inject()
    private createTemplateUsecase: CreateClientUsecase,
    private updateClientUsecase: UpdateClientUsecase,
    private getAllUsecase: GetAllUsecase,
    private getClientUsecase: GetClientUsecase,
    private deleteClientUsecase: DeleteClientUsecase,
  ) {}

  @Get()
  async getAll(): Promise<any> {
    return await this.getAllUsecase.execute();
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<any> {
    return await this.getClientUsecase.execute(id);
  }

  @Post()
  async create(@Body() data: CreateClientDto): Promise<any> {
    return await this.createTemplateUsecase.execute(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateClientDto,
  ): Promise<any> {
    return await this.updateClientUsecase.execute(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return await this.deleteClientUsecase.execute(id);
  }
}
