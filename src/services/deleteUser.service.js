import users from "../database";

const deleteUserService = (uuid) => {
  const userIndex = users.findIndex((element) => element.id === uuid);

  if (userIndex === -1) {
    return { status: 404, message: { message: "user not found" } };
  }

  users.splice(userIndex, 1);

  return { status: 200, message: { message: "user deleted successfully" } };
};

export default deleteUserService;
