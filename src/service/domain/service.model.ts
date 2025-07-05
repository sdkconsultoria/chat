export class ServiceModel {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  category: string;
  status: string;
  includes: string;
  requirements: string;
  notes: string;
  popularity: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  updates: Array<Date>;
}
