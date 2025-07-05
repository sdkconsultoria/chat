export class ClientModel {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  notes: string;
  type: string;
  status: string;
  lastVisit: Date;
  totalVisits: number;
  pets: Array<object>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  updates: Array<Date>;
}
