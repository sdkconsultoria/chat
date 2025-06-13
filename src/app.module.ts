import { Global, Module } from '@nestjs/common';
import { InfraModule } from './global/infra/infra.module';
import { AccountModule } from './account/account.module';
import { AuthModule } from './auth/auth.module';

@Global()
@Module({
  imports: [InfraModule, AccountModule, AuthModule],
})
export class AppModule {}
