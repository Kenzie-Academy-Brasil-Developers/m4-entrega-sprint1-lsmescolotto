import jwt from "jsonwebtoken";

const verifyTokenMiddleware = (request, response, next) => {
  let token = request.headers.authorization;

  token = token.split(" ")[1];

  if (!token) {
    return response
      .status(401)
      .json({ message: "missing authorization headers" });
  }

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return response.status(401).json({ message: "invalid token" });
    }
    next();
  });
};

export default verifyTokenMiddleware;
