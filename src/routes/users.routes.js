import { Router } from "express";
import deleteUserController from "../controllers/deleteUser.controller";
import getUserController from "../controllers/getUser.controller";
import userLoginController from "../controllers/userLogin.controller";
import userRegisterController from "../controllers/userRegister.controller";
import userUpdateController from "../controllers/userUpdate.controller";

const userRouter = Router();

userRouter.post("", userRegisterController);
userRouter.post("/login", userLoginController);
userRouter.get("/profile", getUserController);
userRouter.patch("/:uuid", userUpdateController);
userRouter.delete("/:uuid", deleteUserController);

export default userRouter;
