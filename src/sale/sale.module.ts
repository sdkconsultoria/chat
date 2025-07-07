import { Module } from '@nestjs/common';
import { Sale, SaleSchema } from './infra/sale.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { SaleRepository } from './infra/sale.repository';
import { SaleController } from './infra/sale.controller';
import { CreateSaleUsecase } from './app/create-sale.usecase';
import { GetAllUsecase } from './app/get-all-sale.usecase';
import { UpdateSaleUsecase } from './app/update-sale.usecase';
import { DeleteSaleUsecase } from './app/delete-sale.usecase';
import { GetSaleUsecase } from './app/get-sale.usecase';
import { FindOneSaleUsecase } from './app/find-one-sale.usecase';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Sale.name, schema: SaleSchema }]),
  ],
  controllers: [SaleController],
  providers: [
    CreateSaleUsecase,
    UpdateSaleUsecase,
    DeleteSaleUsecase,
    GetAllUsecase,
    GetSaleUsecase,
    FindOneSaleUsecase,
    {
      provide: 'saleRepository',
      useClass: SaleRepository,
    },
  ],
})
export class SaleModule {}
