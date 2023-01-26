import prismaClient from "../../prisma";

interface ProductRequest {
  name: string;
  price: string;
  description: string;
}

class CreateProductService {
  async execute({ name, price, description }: ProductRequest) {
    const product = await prismaClient.product.create({
      data: {
        name,
        price,
        description,
      },
    });
    return product;
  }
}

export { CreateProductService };
