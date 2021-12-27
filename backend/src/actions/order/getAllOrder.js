const Order = require("../../models/Order");
module.exports = async (req, res) => {
    const orders = await Order.find({});
    return orders
};
