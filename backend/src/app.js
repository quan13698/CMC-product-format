const express = require("express");
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
const morgan = require("morgan");
const app = express();
const indexRouter = require("./app.routes");
require("dotenv").config();

app.use(express.json());
app.use(morgan("tiny"));

app.use("/api", indexRouter);
module.exports = app;
