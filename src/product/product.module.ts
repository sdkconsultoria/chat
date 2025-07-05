import { Module } from '@nestjs/common';
import { Product, ProductSchema } from './infra/product.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductRepository } from './infra/product.repository';
import { ProductController } from './infra/product.controller';
import { CreateProductUsecase } from './app/create-product.usecase';
import { GetAllUsecase } from './app/get-all-product.usecase';
import { UpdateProductUsecase } from './app/update-product.usecase';
import { DeleteProductUsecase } from './app/delete-product.usecase';
import { GetProductUsecase } from './app/get-product.usecase';
import { FindOneProductUsecase } from './app/find-one-product.usecase';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [ProductController],
  providers: [
    CreateProductUsecase,
    UpdateProductUsecase,
    DeleteProductUsecase,
    GetAllUsecase,
    GetProductUsecase,
    FindOneProductUsecase,
    {
      provide: 'productRepository',
      useClass: ProductRepository,
    },
  ],
})
export class ProductModule {}
