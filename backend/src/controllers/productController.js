const resFormater = require('../helpers/resFormatter');
const userAction = require('../actions/product');
const allProduct = async (req, res) => {
  const format = resFormater(req,res);
  const resp = userAction.allProduct({});
  format(resp)
};

const getProductById = async (req, res) => {
  const {id: productId} = {...req.params};
  const format = resFormater(req,res);
  const resp = userAction.getProductById(productId);
  format(resp)

};
module.exports = {
  allProduct,
  getProductById,
};
