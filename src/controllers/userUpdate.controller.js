import userUpdateService from "../services/userUpdate.service";

const userUpdateController = (request, response) => {
  const requestData = request.body;
  const { uuid } = request.params;

  const updatedUser = userUpdateService(uuid, requestData);

  return response.json(updatedUser);
};

export default userUpdateController;
