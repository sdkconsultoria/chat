import { Module } from '@nestjs/common';
import { User, UserSchema } from './infra/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRepository } from './infra/user.repository';
import { UserController } from './infra/user.controller';
import { CreateUserUsecase } from './app/create-user.usecase';
import { GetAllUsecase } from './app/get-all-user.usecase';
import { UpdateUserUsecase } from './app/update-user.usecase';
import { DeleteUserUsecase } from './app/delete-user.usecase';
import { GetUserUsecase } from './app/get-user.usecase';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [
    CreateUserUsecase,
    UpdateUserUsecase,
    DeleteUserUsecase,
    GetAllUsecase,
    GetUserUsecase,
    {
      provide: 'userRepository',
      useClass: UserRepository,
    },
  ],
})
export class UserModule {}
