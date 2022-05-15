import users from "../database";

const deleteUserService = (uuid) => {
  const userIndex = users.findIndex((element) => element.id === uuid);

  if (userIndex === -1) {
    return { message: "user not found" };
  }

  users.splice(userIndex, 1);

  return { message: "user deleted successfully" };
};

export default deleteUserService;
