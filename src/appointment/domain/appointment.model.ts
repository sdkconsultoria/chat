export class AppointmentModel {
  id: string;
  client: object;
  pet: object;
  service: object;
  date: Date;
  time: string;
  employee: string;
  notes: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  updates: Array<Date>;
}
