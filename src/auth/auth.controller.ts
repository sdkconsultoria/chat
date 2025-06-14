import { Body, Controller, Inject, Post } from '@nestjs/common';
import { RegisterUserDto } from './app/register-user.dto';
import { RegisterUserUsecase } from './app/register-user.usecase';

@Controller()
export class AuthController {
  constructor(
    @Inject()
    private registerUserUsecase: RegisterUserUsecase,
  ) { }

  @Post('register')
  async register(@Body() data: RegisterUserDto): Promise<any> {
    return await this.registerUserUsecase.execute(data);
  }
}
