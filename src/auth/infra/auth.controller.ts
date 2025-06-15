import {
  Body,
  Controller,
  Inject,
  Post,
  UseGuards,
  Request,
  Get,
} from '@nestjs/common';
import { RegisterUserDto } from '../app/register-user.dto';
import { RegisterUserUsecase } from '../app/register-user.usecase';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller()
export class AuthController {
  constructor(
    @Inject()
    private registerUserUsecase: RegisterUserUsecase,
    private authService: AuthService,
  ) {}

  @Post('register')
  async register(@Body() data: RegisterUserDto): Promise<any> {
    return await this.registerUserUsecase.execute(data);
  }

  @UseGuards(LocalAuthGuard)
  @Public()
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
