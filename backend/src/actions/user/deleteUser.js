const User = require("../../models/User");
module.exports = async ({ userId }) => {
  const user = await User.findOneAndDelete({ _id: userId });
  if (!user) {
    throw new Error(`Cannot find user with ID: ${userId}`);
  }
  return user
};
