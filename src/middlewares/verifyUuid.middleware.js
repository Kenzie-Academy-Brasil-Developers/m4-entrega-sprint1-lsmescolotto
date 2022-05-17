import users from "../database";

const verifyUuidMiddleware = (request, response, next) => {
  const { uuid } = request.params;

  const userIndex = users.findIndex((element) => element.id === uuid);

  if (userIndex === -1) {
    return response.status(404).json({ message: "user not found" });
  }

  next();
};

export default verifyUuidMiddleware;
