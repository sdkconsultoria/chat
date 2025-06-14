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
import { IsEmailUniqueConstraint } from './infra/decorators/is-email-unique.decorator';
import { FindOneUserUsecase } from './app/find-one-user.usecase';

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
    FindOneUserUsecase,
    IsEmailUniqueConstraint,
    {
      provide: 'userRepository',
      useClass: UserRepository,
    },
  ],
  exports: [
    {
      provide: 'userRepository',
      useClass: UserRepository,
    },
    FindOneUserUsecase,
    IsEmailUniqueConstraint,
  ],
})
export class UserModule {}
