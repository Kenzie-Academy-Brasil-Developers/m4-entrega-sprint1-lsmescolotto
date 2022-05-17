import userLoginService from "../services/userLogin.service";

const userLoginController = (request, response) => {
  const { email, password } = request.body;

  const { status, message } = userLoginService(email, password);

  return response.status(status).json(message);
};

export default userLoginController;
