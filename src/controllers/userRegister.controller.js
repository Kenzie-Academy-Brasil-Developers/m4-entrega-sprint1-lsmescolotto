import userRegisterService from "../services/userRegister.service";

const userRegisterController = (request, response) => {
  createdUser = userRegisterService();

  return response.json(createdUser);
};

export default userRegisterController;
