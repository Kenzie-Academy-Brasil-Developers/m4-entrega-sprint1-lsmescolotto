import { Router } from "express";
import deleteUserController from "../controllers/deleteUser.controller";
import getUserController from "../controllers/getUser.controller";
import userLoginController from "../controllers/userLogin.controller";
import userRegisterController from "../controllers/userRegister.controller";
import userUpdateController from "../controllers/userUpdate.controller";
import getAllUsersController from "../controllers/getAllUsers.controller";
import verifyTokenMiddleware from "../middlewares/verifyToken.middleware";

const userRouter = Router();

userRouter.post("", userRegisterController);
userRouter.post("/login", userLoginController);
userRouter.get("", verifyTokenMiddleware, getAllUsersController);
userRouter.get("/profile", verifyTokenMiddleware, getUserController);
userRouter.patch("/:uuid", verifyTokenMiddleware, userUpdateController);
userRouter.delete("/:uuid", verifyTokenMiddleware, deleteUserController);

export default userRouter;
