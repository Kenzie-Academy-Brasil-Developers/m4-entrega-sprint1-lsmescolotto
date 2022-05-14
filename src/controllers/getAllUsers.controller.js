import getAllUsersService from "../services/getAllUsers.service";

const getAllUsersController = (_, response) => {
  const users = getAllUsersService();

  return response.json(users);
};

export default getAllUsersController;
