import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true, index: true })
  email: string;

  @Prop()
  lastLogin: Date;

  @Prop()
  lastPasswordChange: Date;

  @Prop()
  status: string;

  @Prop()
  emailVerified: boolean;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop({ index: true })
  deletedAt: Date;

  @Prop()
  updates: Array<Date>;

  @Prop()
  password: string;

  @Prop()
  accountId: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
