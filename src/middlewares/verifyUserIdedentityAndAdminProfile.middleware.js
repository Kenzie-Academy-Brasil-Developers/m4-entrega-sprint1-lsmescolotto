import jwt from "jsonwebtoken";
import users from "../database";

const verifyUserIdentityAndAdminProfile = (request, response, next) => {
  const { uuid } = request.params;

  let token = request.headers.authorization;
  token = token.split(" ")[1];

  const jwtUser = jwt.verify(token, "SECRET_KEY");

  const userById = users.find(
    (user) => user.email === jwtUser.email && user.id === uuid
  );

  const userAdm = users.find(
    (user) => user.email === jwtUser.email && user.isAdm === true
  );

  if (!userById && !userAdm) {
    return response.status(401).json({ message: "unauthorized" });
  }

  next();
};

export default verifyUserIdentityAndAdminProfile;
