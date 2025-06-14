import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, index: true })
  name: string;

  @Prop({ required: true })
  type: 'CLIENT' | 'RESELLER';

  @Prop({ required: true, unique: true, index: true })
  email: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop({ index: true })
  deletedAt: Date;

  @Prop()
  updates: Array<Date>;
}

export const UserSchema = SchemaFactory.createForClass(User);
