const resFormater = require("../helpers/resFormatter");
const userActions = require("../actions/user");
const register = (req, res) => {
  const { user_name, password, email, role } = { ...req.body };
  const format = resFormater(req, res);
  const resp = userActions.register({
    user_name,
    role,
    password,
    email,
  });
  format(resp);
};

//Login
const login = (req, res) => {
  const { user_name, password } = { ...req.body };
  const format = resFormater(req, res);
  const resp = userActions.login({
    user_name,
    password,
  });
  format(resp);
};

//Get all users
const getAllusers = async (req, res) => {
  const format = resFormater(req, res);
  const resp = userActions.getAllUsers({});
  format(resp);
};

//Get individual user
const getIndividualUser = async (req, res) => {
  const { id: userId } = { ...req.params };
  const format = resFormater(req, res);
  const resp = userActions.getIndividualUser({
    userId,
  });
  format(resp);
};

//Delete User
const deleteUser = async (req, res) => {
  const { id: userId } = { ...req.params };
  const format = resFormater(req, res);
  const resp = userActions.deleteUser({
    userId,
  });
  format(resp);
};

module.exports = {
  register,
  login,
  getIndividualUser,
  getAllusers,
  deleteUser,
};
