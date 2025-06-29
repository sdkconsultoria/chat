import { Module } from '@nestjs/common';
import { Client, ClientSchema } from './infra/client.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientRepository } from './infra/client.repository';
import { ClientController } from './infra/client.controller';
import { CreateClientUsecase } from './app/create-client.usecase';
import { GetAllUsecase } from './app/get-all-client.usecase';
import { UpdateClientUsecase } from './app/update-client.usecase';
import { DeleteClientUsecase } from './app/delete-client.usecase';
import { GetClientUsecase } from './app/get-client.usecase';
import { FindOneClientUsecase } from './app/find-one-client.usecase';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]),
    UserModule,
  ],
  controllers: [ClientController],
  providers: [
    CreateClientUsecase,
    UpdateClientUsecase,
    DeleteClientUsecase,
    GetAllUsecase,
    GetClientUsecase,
    FindOneClientUsecase,
    {
      provide: 'clientRepository',
      useClass: ClientRepository,
    },
  ],
})
export class ClientModule {}
