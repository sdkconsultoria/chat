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
import { CreateProductUsecase } from '../app/create-product.usecase';
import { CreateProductDto } from '../app/dto/create-product.dto';
import { GetAllUsecase } from '../app/get-all-product.usecase';
import { UpdateProductDto } from '../app/dto/update-product.dto';
import { UpdateProductUsecase } from '../app/update-product.usecase';
import { DeleteProductUsecase } from '../app/delete-product.usecase';
import { GetProductUsecase } from '../app/get-product.usecase';

@Controller('product')
export class ProductController {
  constructor(
    @Inject()
    private createTemplateUsecase: CreateProductUsecase,
    private updateProductUsecase: UpdateProductUsecase,
    private getAllUsecase: GetAllUsecase,
    private getProductUsecase: GetProductUsecase,
    private deleteProductUsecase: DeleteProductUsecase,
  ) {}

  @Get()
  async getAll(): Promise<any> {
    return await this.getAllUsecase.execute();
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<any> {
    return await this.getProductUsecase.execute(id);
  }

  @Post()
  async create(@Body() data: CreateProductDto): Promise<any> {
    return await this.createTemplateUsecase.execute(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateProductDto,
  ): Promise<any> {
    return await this.updateProductUsecase.execute(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return await this.deleteProductUsecase.execute(id);
  }
}
