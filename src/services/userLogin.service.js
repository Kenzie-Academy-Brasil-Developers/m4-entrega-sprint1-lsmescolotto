import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";
import users from "../database";

const userLoginService = (email, password) => {
  const user = users.find((item) => item.email === email);

  if (!user) {
    return {
      status: 401,
      message: { message: "invalid email adress or password" },
    };
  }

  const passwordCompatibility = bcrypt.compareSync(password, user.password);

  if (!passwordCompatibility) {
    return {
      status: 401,
      message: { message: "invalid email adress or password" },
    };
  }

  const token = jwt.sign({ email: email }, "SECRET_KEY", { expiresIn: "24h" });

  return { status: 200, message: { token: token } };
};

export default userLoginService;
