import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { FindOneUserUsecase } from 'src/user/app/find-one-user.usecase';
import * as bcrypt from 'bcrypt';
import { UserModel } from 'src/user/domain/user.model';
import { use } from 'passport';

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

  login(user: UserModel) {
    const payload = {
      email: user.email,
      sub: user.id,
      user: {
        email: user.email,
        role: user.role,
        name: user.name,
      },
    };
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        email: user.email,
        role: user.role,
        name: user.name,
      },
    };
  }
}
