import users from "../database";

const userUpdateService = (uuid, requestData) => {
  const userIndex = users.findIndex((user) => user.id === uuid);

  if (userIndex === -1) {
    return { status: 404, message: { message: "user not found" } };
  }

  const userToUpdate = users[userIndex];

  Object.assign(userToUpdate, requestData);

  userToUpdate.updatedOn = new Date();

  return { status: 200, message: userToUpdate };
};

export default userUpdateService;
