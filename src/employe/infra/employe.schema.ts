import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EmployeDocument = HydratedDocument<Employe>;

@Schema({ timestamps: true })
export class Employe {
  @Prop()
  name: string;

  @Prop()
  lastname: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  emergencyPhone: string;

  @Prop()
  emergencyContact: string;

  @Prop()
  address: string;

  @Prop()
  startDate: string;

  @Prop()
  notes: string;

  @Prop()
  status: string;

  @Prop()
  hireDate: Date;

  @Prop()
  salary: number;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop({ index: true })
  deletedAt: Date;

  @Prop()
  updates: Array<Date>;
}

export const EmployeSchema = SchemaFactory.createForClass(Employe);
