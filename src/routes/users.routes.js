import { Router } from "express";
import deleteUserController from "../controllers/deleteUser.controller";
import getUserController from "../controllers/getUser.controller";
import userLoginController from "../controllers/userLogin.controller";
import userRegisterController from "../controllers/userRegister.controller";
import userUpdateController from "../controllers/userUpdate.controller";
import getAllUsersController from "../controllers/getAllUsers.controller";
import verifyTokenMiddleware from "../middlewares/verifyToken.middleware";
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import verifyUserIdentityAndAdminProfileMiddleware from "../middlewares/verifyUserIdentityAndAdminProfile.middleware";
import verifyUuidMiddleware from "../middlewares/verifyUuid.middleware";

const userRouter = Router();

userRouter.post("", verifyEmailAvailabilityMiddleware, userRegisterController);
userRouter.post("/login", userLoginController);
userRouter.get(
  "",
  [verifyTokenMiddleware, verifyUserIdentityAndAdminProfileMiddleware],
  getAllUsersController
);
userRouter.get("/profile", verifyTokenMiddleware, getUserController);
userRouter.patch(
  "/:uuid",
  [
    verifyTokenMiddleware,
    verifyUuidMiddleware,
    verifyUserIdentityAndAdminProfileMiddleware,
  ],
  userUpdateController
);
userRouter.delete(
  "/:uuid",
  [
    verifyTokenMiddleware,
    verifyUuidMiddleware,
    verifyUserIdentityAndAdminProfileMiddleware,
  ],
  deleteUserController
);

export default userRouter;
