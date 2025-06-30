export class UserModel {
  id: string;
  name: string;
  role: string;
  email: string;
  profilePicture: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  updates: Array<Date>;
}
