import { Global, Module } from '@nestjs/common';
import { InfraModule } from './global/infra/infra.module';
import { AccountModule } from './account/account.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { EmployeModule } from './employe/employe.module';

@Global()
@Module({
  imports: [InfraModule, AuthModule, AccountModule, UserModule, EmployeModule],
})
export class AppModule {}
