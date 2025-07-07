import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
// import { User } from 'src/user/infra/user.schema';

export type SaleDocument = HydratedDocument<Sale>;

@Schema({ timestamps: true })
export class Sale {
  // @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  // userId: User;

  @Prop()
  cart: any[] = [];

  @Prop()
  paymentMethod: string = '';

  @Prop()
  amountPaid: number = 0;

  @Prop()
  change: number = 0;

  @Prop()
  total: number = 0;

  @Prop({ type: Object })
  client: object = {};

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  deletedAt: Date;

  @Prop()
  updates: Array<Date>;

  @Prop()
  status: string;
}

export const SaleSchema = SchemaFactory.createForClass(Sale);
