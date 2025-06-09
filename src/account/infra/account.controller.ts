import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateAccountUsecase } from '../app/create-account.usecase';
import { CreateAccountDto } from '../app/dto/create-account.dto';
import { GetAllUsecase } from '../app/get-all-account.usecase';
import { UpdateAccountDto } from '../app/dto/update-account.dto';
import { UpdateAccountUsecase } from '../app/update-account.usecase';
import { DeleteAccountUsecase } from '../app/delete-account.usecase';
import { GetAccountUsecase } from '../app/get-account.usecase';

@Controller('account')
export class AccountController {
  constructor(
    @Inject()
    private createTemplateUsecase: CreateAccountUsecase,
    private updateAccountUsecase: UpdateAccountUsecase,
    private getAllUsecase: GetAllUsecase,
    private getAccountUsecase: GetAccountUsecase,
    private deleteAccountUsecase: DeleteAccountUsecase,
  ) {}

  @Get()
  async getAll(): Promise<any> {
    return await this.getAllUsecase.execute();
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<any> {
    return await this.getAccountUsecase.execute(id);
  }

  @Post()
  async create(@Body() data: CreateAccountDto): Promise<any> {
    return await this.createTemplateUsecase.execute(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateAccountDto,
  ): Promise<any> {
    return await this.updateAccountUsecase.execute(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return await this.deleteAccountUsecase.execute(id);
  }
}
