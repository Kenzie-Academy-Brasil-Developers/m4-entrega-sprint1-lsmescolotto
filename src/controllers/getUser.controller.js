import getUserService from "../services/getUser.service";

const getUserController = (request, response) => {
  let token = request.headers.authorization;

  const foundUser = getUserService(token);

  return response.json(foundUser);
};

export default getUserController;
