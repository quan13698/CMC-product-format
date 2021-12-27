const Product = require("../../models/Product");
module.exports = async () => {
    const products = await Product.find()
    return products
}