import { response } from "express";
import userUpdateService from "../services/userUpdate.service";

const userUpdateController = (request, response) => {
  updatedUser = userUpdateService();

  return response.json(updatedUser);
};

export default userUpdateController;
