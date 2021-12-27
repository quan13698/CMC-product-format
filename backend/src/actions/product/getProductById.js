const Product = require("../../models/Product");
module.exports = async (productId) => {
  const product = await Product.findById({ id: productId });
  return product;
};
