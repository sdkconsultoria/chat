import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from './register.dto';

@Controller()
export class AuthController {
  @Post('register')
  async register(@Body() data: RegisterDto): Promise<any> {}
}
