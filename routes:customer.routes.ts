import { Router } from "express";
import { CustomerController } from "../controllers/customer.controller";

const router = Router();

router.post("/", CustomerController.create);
router.get("/", CustomerController.findAll);
router.get("/:id", CustomerController.findOne);
router.put("/:id", CustomerController.update);
router.delete("/:id", CustomerController.delete);

export default router;
