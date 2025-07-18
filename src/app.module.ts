import { Global, Module } from '@nestjs/common';
import { InfraModule } from './global/infra/infra.module';
import { AccountModule } from './account/account.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { EmployeModule } from './employe/employe.module';
import { ClientModule } from './client/client.module';
import { ServiceModule } from './service/service.module';
import { ProductModule } from './product/product.module';
import { AppointmentModule } from './appointment/appointment.module';
import { SaleModule } from './sale/sale.module';

@Global()
@Module({
  imports: [
    InfraModule,
    AuthModule,
    AccountModule,
    UserModule,
    EmployeModule,
    ClientModule,
    ServiceModule,
    ProductModule,
    AppointmentModule,
    SaleModule,
  ],
})
export class AppModule {}
