import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
// import { User } from 'src/user/infra/user.schema';

export type AppointmentDocument = HydratedDocument<Appointment>;

@Schema({ timestamps: true })
export class Appointment {
  // @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  // userId: User;

  @Prop({ type: Object })
  client: object;

  @Prop({ type: Object })
  pet: object;

  @Prop({ type: Object })
  service: object;

  @Prop()
  date: Date;

  @Prop()
  time: string;

  @Prop()
  status: string;

  @Prop()
  employee: string;

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
