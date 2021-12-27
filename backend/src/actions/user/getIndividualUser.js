const User = require("../../models/User");
module.exports = async ({userId}) => {
  const user = await User.findOne({ _id: userId });
  if (!user) {
    throw new Error(`Cannot find user with ID: ${userId}`);
  }
  const showUser = {
    user_name: user.user_name,
    role: user.role,
    email: user.email
  }
  return showUser;
};
