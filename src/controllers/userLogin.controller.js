import userLoginService from "../services/userLogin.service";

const userLoginController = (request, response) => {
  userLogin = userLoginService();

  return response.json(userLogin);
};

export default userLoginController;
