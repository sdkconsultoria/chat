import { Module } from '@nestjs/common';
import { Account, AccountSchema } from './infra/account.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountRepository } from './infra/account.repository';
import { AccountController } from './infra/account.controller';
import { CreateAccountUsecase } from './app/create-account.usecase';
import { GetAllUsecase } from './app/get-all-account.usecase';
import { UpdateAccountUsecase } from './app/update-account.usecase';
import { DeleteAccountUsecase } from './app/delete-account.usecase';
import { GetAccountUsecase } from './app/get-account.usecase';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
  ],
  controllers: [AccountController],
  providers: [
    CreateAccountUsecase,
    UpdateAccountUsecase,
    DeleteAccountUsecase,
    GetAllUsecase,
    GetAccountUsecase,
    {
      provide: 'accountRepository',
      useClass: AccountRepository,
    },
  ],
})
export class AccountModule {}
