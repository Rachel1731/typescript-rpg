import { Request, Response } from "express";
import { Customer } from "../models/customer.model";

export class CustomerController {
  static async create(req: Request, res: Response): Promise<void> {
    try {
      const customer = await Customer.create(req.body);
      res.status(201).json(customer);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async findAll(req: Request, res: Response): Promise<void> {
    try {
      const customers = await Customer.findAll();
      res.status(200).json(customers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async findOne(req: Request, res: Response): Promise<void> {
    try {
      const customer = await Customer.findByPk(req.params.id);
      if (customer) {
        res.status(200).json(customer);
      } else {
        res.status(404).json({ message: "Customer not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async update(req: Request, res: Response): Promise<void> {
    try {
      const customer = await Customer.findByPk(req.params.id);
      if (customer) {
        await customer.update(req.body);
        res.status(200).json(customer);
      } else {
        res.status(404).json({ message: "Customer not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async delete(req: Request, res: Response): Promise<void> {
    try {
      const customer = await Customer.findByPk(req.params.id);
      if (customer) {
        await customer.destroy();
        res.status(204).send();
      } else {
        res.status(404).json({ message: "Customer not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
