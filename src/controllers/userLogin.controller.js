import userLoginService from "../services/userLogin.service";

const userLoginController = (request, response) => {
  userLogin = userLoginService();
};

export default userLoginController;
