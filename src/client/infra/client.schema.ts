import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClientDocument = HydratedDocument<Client>;

@Schema({ timestamps: true })
export class Client {
  @Prop()
  name: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  status: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  lastVisit: Date;

  @Prop()
  totalVisits: number;

  @Prop({ index: true })
  deletedAt: Date;

  @Prop()
  updates: Array<Date>;

  @Prop()
  email: string;

  @Prop()
  type: string;

  @Prop()
  notes: string;

  @Prop()
  pets: Array<object>;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
