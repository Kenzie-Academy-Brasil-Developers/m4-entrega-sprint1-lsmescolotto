import getUserService from "../services/getUser.service";

const getUserController = (request, response) => {
  foundUser = getUserService();

  return response.json(foundUser);
};

export default getUserController;
