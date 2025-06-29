import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { User } from 'src/user/infra/user.schema';

export type ServiceDocument = HydratedDocument<Service>;

@Schema({ timestamps: true })
export class Service {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: User;

  @Prop()
  name: string;

  @Prop()
  lastname: string;

  @Prop()
  dni: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  address: string;

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

export const ServiceSchema = SchemaFactory.createForClass(Service);
