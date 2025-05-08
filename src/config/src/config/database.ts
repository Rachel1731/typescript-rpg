import { Sequelize } from "sequelize-typescript";
import { Customer } from "../models/customer.model";

export const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "password",
  database: "crm_db",
  models: [Customer],
});
