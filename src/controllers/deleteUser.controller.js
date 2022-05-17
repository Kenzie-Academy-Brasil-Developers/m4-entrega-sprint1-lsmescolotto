import deleteUserService from "../services/deleteUser.service";

const deleteUserController = (request, response) => {
  const { uuid } = request.params;

  const deleteUserMessage = deleteUserService(uuid);

  return response.json(deleteUserMessage);
};

export default deleteUserController;
