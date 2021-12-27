const User = require("../../models/User");
// const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
module.exports = async ({ user_name, password, email, role }) => {
  //Missing id or password
  if (!user_name || !password) {
    throw new Error("Missing username or password! Please try again!");
  }
  const user = await User.findOne({ user_name });
  if (user) {
    throw new Error("Username have already used");
  }
  // register successfully
  const hashPassword = await argon2.hash(password);
  const newUser = new User({ user_name, password: hashPassword, email, role });
  await newUser.save();
  // const accessToken = jwt.sign(
  //   { userId: newUser._id },
  //   process.env.TOKEN_SECRET
  // );
  const showUser = {
    user_name,
    role,
    email,
    // accessToken,
  };
  return showUser;
};
