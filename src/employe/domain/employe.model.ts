export class EmployeModel {
  id: string;
  name: string;
  lastname: string;
  phoneNumber: string;
  startDate: string;
  salary: number;
  notes: string;
  address: string;
  emergencyPhone: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  emergencyContact: string;
  status: string;
  updates: Array<Date>;
}
