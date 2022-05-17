import users from "../database";

const verifyEmailAvailabilityMiddleware = (request, response, next) => {
  const requestData = request.body;

  const foundUser = users.find((user) => user.email === requestData.email);

  if (foundUser) {
    return response.status(400).json({ message: "email already registered" });
  }
  next();
};

export default verifyEmailAvailabilityMiddleware;
