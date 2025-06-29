import { Module } from '@nestjs/common';
import { Appointment, AppointmentSchema } from './infra/appointment.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AppointmentRepository } from './infra/appointment.repository';
import { AppointmentController } from './infra/appointment.controller';
import { CreateAppointmentUsecase } from './app/create-appointment.usecase';
import { GetAllUsecase } from './app/get-all-appointment.usecase';
import { UpdateAppointmentUsecase } from './app/update-appointment.usecase';
import { DeleteAppointmentUsecase } from './app/delete-appointment.usecase';
import { GetAppointmentUsecase } from './app/get-appointment.usecase';
import { FindOneAppointmentUsecase } from './app/find-one-appointment.usecase';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Appointment.name, schema: AppointmentSchema }]),
    UserModule,
  ],
  controllers: [AppointmentController],
  providers: [
    CreateAppointmentUsecase,
    UpdateAppointmentUsecase,
    DeleteAppointmentUsecase,
    GetAllUsecase,
    GetAppointmentUsecase,
    FindOneAppointmentUsecase,
    {
      provide: 'appointmentRepository',
      useClass: AppointmentRepository,
    },
  ],
})
export class AppointmentModule {}
