import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
// import { User } from 'src/user/infra/user.schema';

export type AppointmentDocument = HydratedDocument<Appointment>;

@Schema({ timestamps: true })
export class Appointment {
  // @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  // userId: User;

  @Prop()
  clientId: string;

  @Prop()
  petId: string;

  @Prop()
  serviceId: string;

  @Prop()
  date: string;

  @Prop()
  time: string;

  @Prop()
  duration: number;

  @Prop()
  price: number;

  @Prop()
  status: string;

  @Prop()
  employeeId: string;

  @Prop()
  notes: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop({ index: true })
  deletedAt: Date;

  @Prop()
  updates: Array<Date>;
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);
