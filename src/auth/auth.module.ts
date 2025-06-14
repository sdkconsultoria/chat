import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { RegisterUserUsecase } from './app/register-user.usecase';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule],
  providers: [AuthService, RegisterUserUsecase],
  controllers: [AuthController],
})
export class AuthModule {}
