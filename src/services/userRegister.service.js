import users from "../database";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

const userRegisterService = async (name, email, password, isAdm) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    name,
    email,
    password: hashedPassword,
    id: uuidv4(),
    isAdm,
    createdOn: new Date(),
    updatedOn: new Date(),
  };

  users.push(newUser);

  const userView = Object.assign({}, newUser);
  delete userView["password"];

  return userView;
};

export default userRegisterService;
