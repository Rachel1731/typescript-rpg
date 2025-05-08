import express from "express";
import { sequelize } from "./config/database";
import customerRoutes from "./routes/customer.routes";

const app = express();

app.use(express.json());
app.use("/api/customers", customerRoutes);

sequelize
  .sync()
  .then(() => console.log("Database connected"))
  .catch((error) => console.error("Database connection failed:", error));

export default app;
