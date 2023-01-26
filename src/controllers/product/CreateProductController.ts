import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, price, description } = req.body;

    const createProductService = new CreateProductService();

    const product = await createProductService.execute({
      name,
      price,
      description,
    });

    return res.json(product);
  }
}

export { CreateProductController };
