const express = require("express");
const router = express.Router();
const verifyToken = require("./middleware/checkAuth");

const userCtrl = require("./controllers/userAuthenController");
router.post("/register", userCtrl.register);
router.post("/login", userCtrl.login);
router.get("/users", verifyToken, userCtrl.getAllusers);
router.get("/user/:id", verifyToken, userCtrl.getIndividualUser);
router.get("/user/delete/:id", verifyToken, userCtrl.deleteUser);

const productCtrl = require("./controllers/productController");
router.get("/products", productCtrl.allProduct);
router.get("/products/:id", productCtrl.getProductById);

const orderCtrl = require("./controllers/orderController");
router.post("/order", orderCtrl.createOrder);
router.delete("/order/:id", orderCtrl.removeOrder);
router.get("/all-order", orderCtrl.getAllOrder);

module.exports = router;
