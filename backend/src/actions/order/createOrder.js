const Product = require("../../models/Product");
const Order = require("../../models/Order");
module.exports = async ({ items: cartItems, tax, shippingFee }) => {
  if (!cartItems || cartItems.length < 1) {
    throw new Error("No items added");
  }
  if (!tax || !shippingFee) {
    throw new Error("Please provide tax nad shippingFee");
  }

  let itemsOrder = [];
  let subtotal = 0;
  for (const item of cartItems) {
    const dbProduct = await Product.findOne({ _id: item.product });
    if (!dbProduct) {
      throw new Error(`No product with id: ${item.product}`)
    }
    const { product_name, price, color, _id } = dbProduct;
    const singleOrderItem = {
      amount: item.amount,
      product_name,
      price,
      color,
    };
    itemsOrder = [...itemsOrder, singleOrderItem];
    subtotal += item.amount * price;
  }
  const total = tax + shippingFee + subtotal;
  const order = await Order.create({
    tax,
    shippingFee,
    subtotal,
    total,
    cartItems,
  });
  return order
};
