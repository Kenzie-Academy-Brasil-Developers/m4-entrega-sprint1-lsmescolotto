import getUserService from "../services/getUser.service";

const getUserController = (request, response) => {
  const requestData = request.body;

  const foundUser = getUserService();

  return response.json(foundUser);
};

export default getUserController;
