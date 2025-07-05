import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ServiceDocument = HydratedDocument<Service>;

@Schema({ timestamps: true })
export class Service {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  duration: number;

  @Prop()
  category: string;

  @Prop()
  status: string;

  @Prop()
  includes: string;

  @Prop()
  requirements: string;

  @Prop()
  notes: string;

  @Prop()
  popularity: number;

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
