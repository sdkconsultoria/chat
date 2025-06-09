export class AccountModel {
  id: string;
  name: string;
  email: string;
  password: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  updates: Array<Date>;
}
