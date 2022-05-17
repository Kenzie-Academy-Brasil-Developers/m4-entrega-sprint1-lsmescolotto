import users from "../database";

const userUpdateService = (uuid, requestData) => {
  const userIndex = users.findIndex((user) => user.id === uuid);

  if (userIndex === -1) {
    return { message: "user not found" };
  }

  const userToUpdate = users[userIndex];

  Object.assign(userToUpdate, requestData);

  userToUpdate.updatedOn = new Date();

  return userToUpdate;
};

export default userUpdateService;
