const Order = require('../../models/Order');
module.exports = async (orderId) => {
  const deletedOrder = await Order.findOneAndDelete({ id: orderId });
  if (!deletedOrder) {
   throw new Error("Cannot find order ID")
  }
  return deletedOrder
};
