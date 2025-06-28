import { Module } from '@nestjs/common';
import { Employe, EmployeSchema } from './infra/employe.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeRepository } from './infra/employe.repository';
import { EmployeController } from './infra/employe.controller';
import { CreateEmployeUsecase } from './app/create-employe.usecase';
import { GetAllUsecase } from './app/get-all-employe.usecase';
import { UpdateEmployeUsecase } from './app/update-employe.usecase';
import { DeleteEmployeUsecase } from './app/delete-employe.usecase';
import { GetEmployeUsecase } from './app/get-employe.usecase';
import { FindOneEmployeUsecase } from './app/find-one-employe.usecase';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Employe.name, schema: EmployeSchema }]),
    UserModule,
  ],
  controllers: [EmployeController],
  providers: [
    CreateEmployeUsecase,
    UpdateEmployeUsecase,
    DeleteEmployeUsecase,
    GetAllUsecase,
    GetEmployeUsecase,
    FindOneEmployeUsecase,
    {
      provide: 'employeRepository',
      useClass: EmployeRepository,
    },
  ],
})
export class EmployeModule {}
