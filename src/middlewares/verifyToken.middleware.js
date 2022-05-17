import jwt from "jsonwebtoken";

const verifyTokenMiddleware = (request, response, next) => {
  let token = request.headers.authorization;

  if (!token || token === "Bearer") {
    return response
      .status(401)
      .json({ message: "missing authorization headers" });
  }
  console.log(token);
  token = token.split(" ")[1];
  console.log(token);

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return response.status(401).json({ message: "invalid token" });
    }
    next();
  });
};

export default verifyTokenMiddleware;
