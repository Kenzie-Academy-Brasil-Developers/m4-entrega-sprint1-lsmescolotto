import userRegisterService from "../services/userRegister.service";

const userRegisterController = async (request, response) => {
  const { name, email, password, isAdm } = request.body;

  const createdUser = await userRegisterService(name, email, password, isAdm);

  return response.json(createdUser);
};

export default userRegisterController;
