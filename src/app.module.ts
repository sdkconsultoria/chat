import { Global, Module } from '@nestjs/common';
import { InfraModule } from './global/infra/infra.module';
import { AccountModule } from './account/account.module';

@Global()
@Module({
  imports: [InfraModule, AccountModule],
})
export class AppModule {}
