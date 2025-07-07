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
import { CreateSaleUsecase } from '../app/create-sale.usecase';
import { CreateSaleDto } from '../app/dto/create-sale.dto';
import { GetAllUsecase } from '../app/get-all-sale.usecase';
import { UpdateSaleDto } from '../app/dto/update-sale.dto';
import { UpdateSaleUsecase } from '../app/update-sale.usecase';
import { DeleteSaleUsecase } from '../app/delete-sale.usecase';
import { GetSaleUsecase } from '../app/get-sale.usecase';

@Controller('sale')
export class SaleController {
  constructor(
    @Inject()
    private createTemplateUsecase: CreateSaleUsecase,
    private updateSaleUsecase: UpdateSaleUsecase,
    private getAllUsecase: GetAllUsecase,
    private getSaleUsecase: GetSaleUsecase,
    private deleteSaleUsecase: DeleteSaleUsecase,
  ) {}

  @Get()
  async getAll(): Promise<any> {
    return await this.getAllUsecase.execute();
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<any> {
    return await this.getSaleUsecase.execute(id);
  }

  @Post()
  async create(@Body() data: CreateSaleDto): Promise<any> {
    return await this.createTemplateUsecase.execute(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateSaleDto,
  ): Promise<any> {
    return await this.updateSaleUsecase.execute(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return await this.deleteSaleUsecase.execute(id);
  }
}
