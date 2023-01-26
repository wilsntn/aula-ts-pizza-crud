import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";
import { UpdateUserService } from "../../services/user/UpdateUserService";

class UpdateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password, user_id } = req.body;

    const updateUserService = new UpdateUserService();

    const updatedUser = await updateUserService.execute({
      user_id,
      name,
      email,
      password,
    });

    return res.json(updatedUser);
  }
}

export { UpdateUserController };
