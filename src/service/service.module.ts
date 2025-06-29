import { Module } from '@nestjs/common';
import { Service, ServiceSchema } from './infra/service.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceRepository } from './infra/service.repository';
import { ServiceController } from './infra/service.controller';
import { CreateServiceUsecase } from './app/create-service.usecase';
import { GetAllUsecase } from './app/get-all-service.usecase';
import { UpdateServiceUsecase } from './app/update-service.usecase';
import { DeleteServiceUsecase } from './app/delete-service.usecase';
import { GetServiceUsecase } from './app/get-service.usecase';
import { FindOneServiceUsecase } from './app/find-one-service.usecase';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Service.name, schema: ServiceSchema }]),
    UserModule,
  ],
  controllers: [ServiceController],
  providers: [
    CreateServiceUsecase,
    UpdateServiceUsecase,
    DeleteServiceUsecase,
    GetAllUsecase,
    GetServiceUsecase,
    FindOneServiceUsecase,
    {
      provide: 'serviceRepository',
      useClass: ServiceRepository,
    },
  ],
})
export class ServiceModule {}
