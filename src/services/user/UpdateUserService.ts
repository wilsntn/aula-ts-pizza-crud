import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
  user_id: string;
  name?: string;
  email?: string;
  password?: string;
}

class UpdateUserService {
  async execute(data: UserRequest) {
    const user = await prismaClient.user.findFirst({
      where: {
        id: data.user_id,
      },
    });
    if (!user) {
      throw new Error("User not found");
    }
    if (data.password) {
      const passwordHash = await hash(data.password, 8);
      const updatedUser = prismaClient.user.update({
        where: {
          id: data.user_id,
        },
        data: {
          name: data.name,
          email: data.email,
          password: passwordHash,
        },
        select: {
          id: true,
          name: true,
          email: true,
          updated_at: true,
        },
      });
      return updatedUser;
    }

    return;
  }
}

export { UpdateUserService };
