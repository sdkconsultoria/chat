import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { FindOneUserUsecase } from 'src/user/app/find-one-user.usecase';
import * as bcrypt from 'bcrypt';
import { UserModel } from 'src/user/domain/user.model';

@Injectable()
export class AuthService {
  constructor(
    private findOneUserUsecase: FindOneUserUsecase,
    private jwtService: JwtService,
  ) { }

  async validateUser(email: string, pass: string): Promise<Partial<UserModel>> {
    const user = await this.findOneUserUsecase.execute({ email });

    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;

      return result;
    }
    return null;
  }

  async login(user: UserModel) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
