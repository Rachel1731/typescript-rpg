import { Column, Model, Table } from "sequelize-typescript";

@Table
export class Customer extends Model {
  @Column
  name!: string;

  @Column
  email!: string;

  @Column
  phone!: string;

  @Column
  address!: string;
}
