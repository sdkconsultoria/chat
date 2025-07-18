export class ProductModel {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  status: string;
  popularity: number;
  stock: number;
  minStock: number;
  sku: string;
  barcode: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  updates: Array<Date>;
}
