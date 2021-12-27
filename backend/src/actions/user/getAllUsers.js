const User = require("../../models/User");
module.exports = async () => {
  const users = await User.find();
  const showUser = {
    user_name: users.user_name,
    email: users.email,
    role: users.role,
    _id: users._id,
  };
  return showUser;
};
