const resFormater = require("../helpers/resFormatter");
const userAction = require("../actions/order");
const createOrder = async (req, res) => {
  const { items: cartItems, tax, shippingFee } = { ...req.body };
  console.log(cartItems, tax, shippingFee);
  const format = resFormater(req, res);
  const resp = userAction.createOrder({
    items: cartItems,
    tax,
    shippingFee,
  });
  format(resp);
};

const removeOrder = async (req, res) => {
  const { orderId } = { ...req.params.id };
  const format = resFormater(req, res);
  const resp = userAction.removeOrder({
    orderId,
  });
  format(resp);
};

const getAllOrder = async (req, res) => {
  const format = resFormater(req, res);
  const resp = userAction.getAllOrder({});
  format(resp);
};
module.exports = {
  getAllOrder,
  removeOrder,
  createOrder,
};
