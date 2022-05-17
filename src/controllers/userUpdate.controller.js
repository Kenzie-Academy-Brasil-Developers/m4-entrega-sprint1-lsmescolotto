import userUpdateService from "../services/userUpdate.service";

const userUpdateController = (request, response) => {
  const requestData = request.body;
  const { uuid } = request.params;

  const { status, message } = userUpdateService(uuid, requestData);

  return response.status(status).json(message);
};

export default userUpdateController;
