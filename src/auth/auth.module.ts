import { Module } from '@nestjs/common';
import { AuthService } from './infra/auth.service';
import { AuthController } from './infra/auth.controller';
import { RegisterUserUsecase } from './app/register-user.usecase';
import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './infra/stragegy/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from './infra/constants';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './infra/stragegy/jwt.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [AuthService, RegisterUserUsecase, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
