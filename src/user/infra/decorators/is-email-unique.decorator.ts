import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { FindOneUserUsecase } from 'src/user/app/find-one-user.usecase';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsEmailUniqueConstraint implements ValidatorConstraintInterface {
  constructor(private readonly findOneUserUsecase: FindOneUserUsecase) { }

  async validate(email: string, args: ValidationArguments) {
    const user = await this.findOneUserUsecase.execute({ email });
    return !user; // if user is not found, email is unique
  }

  defaultMessage(args: ValidationArguments) {
    return 'Email is already in use';
  }
}

export function IsEmailUnique(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsEmailUniqueConstraint,
    });
  };
}
