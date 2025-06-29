import { Module } from '@nestjs/common';
import { Product, ProductSchema } from './infra/coupon.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductRepository } from './infra/coupon.repository';
import { ProductController } from './infra/coupon.controller';
import { CreateProductUsecase } from './app/create-coupon.usecase';
import { GetAllUsecase } from './app/get-all-coupon.usecase';
import { UpdateProductUsecase } from './app/update-coupon.usecase';
import { DeleteProductUsecase } from './app/delete-coupon.usecase';
import { GetProductUsecase } from './app/get-coupon.usecase';
import { FindOneProductUsecase } from './app/find-one-coupon.usecase';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    UserModule,
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
      provide: 'couponRepository',
      useClass: ProductRepository,
    },
  ],
})
export class ProductModule {}
