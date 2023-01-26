import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { ListUserController } from "./controllers/user/ListUserController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListProductController } from "./controllers/product/ListProductController";
import { DeleteUserController } from "./controllers/user/DeleteUserController";
import { UpdateUserController } from "./controllers/user/UpdateUserController";

const router = Router();

// USERS

router.post("/users", new CreateUserController().handle);

router.get("/users", new ListUserController().handle);

router.post("/delete-user", new DeleteUserController().handle);

router.post("/update-user", new UpdateUserController().handle);

// CATEGORIES

router.post("/categories", new CreateCategoryController().handle);

router.get("/categories", new ListCategoryController().handle);

// PRODUCTS

router.post("/products", new CreateProductController().handle);

router.get("/products", new ListProductController().handle);

export { router };
