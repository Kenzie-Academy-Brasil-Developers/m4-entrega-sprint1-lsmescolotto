import { response } from "express";
import deleteUserService from "../services/deleteUser.service";

const deleteUserController = (request, response) => {
  const { uuid } = request.params;

  const deletedUserMessage = deleteUserService(uuid);

  return response.json(deletedUserMessage);
};

export default deleteUserController;
