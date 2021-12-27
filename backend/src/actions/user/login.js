const User = require("../../models/User");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
module.exports = async ({ user_name, password }) => {
  //Missing username or password
  if (!user_name || !password) {
    throw new Error("Missing username or password!");
  }
  // Incorrect username or password
  const user = await User.findOne({ user_name });
  if (!user) {
    throw new Error("Incorrect username or password! Please try again!");
  }
  // Username found
  const validPassword = await argon2.verify(user.password, password);
  if (!validPassword) {
    throw new Error("Incorrect username or password! Please try again!");
  }
  const accessToken = jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET, {expiresIn: 30});
  const showUser = {
    user_name,
    role: user.role,
    accessToken,
  };
  return showUser;
};
