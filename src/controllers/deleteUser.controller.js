import { response } from "express";
import deleteUserService from "../services/deleteUser.service";

const deleteUserController = () => {
  deletedUserMessage = deleteUserService();

  return response.json(deletedUserMessage);
};

export default deleteUserController;
