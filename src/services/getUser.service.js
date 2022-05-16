import users from "../database";
import jwt from "jsonwebtoken";

const getUserService = (token) => {
  if (!token) {
    return { message: "missing authorization headers" };
  }

  token = token.split(" ")[1];

  const jwtUser = jwt.verify(token, "SECRET_KEY");

  const dbUser = users.find((user) => user.email === jwtUser.email);

  const userView = Object.assign({}, dbUser);
  delete userView["password"];

  return userView;
};

export default getUserService;
