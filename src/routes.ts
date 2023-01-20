import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

const router = Router();

// USERS

router.post("/users", new CreateUserController().handle);

// CATEGORIES

router.post("/categories", new CreateCategoryController().handle);

router.get("/categories", new ListCategoryController().handle);

export { router };
