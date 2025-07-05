import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true })
export class Product {
  @Prop()
  name: string;

  @Prop()
  category: string;

  @Prop()
  price: number;

  @Prop()
  description: string;

  @Prop()
  status: string;

  @Prop()
  popularity: number;

  @Prop()
  stock: number;

  @Prop()
  sku: string;

  @Prop()
  barcode: string;

  @Prop()
  minStock: number;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop({ index: true })
  deletedAt: Date;

  @Prop()
  updates: Array<Date>;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
