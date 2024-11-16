const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json()); // Phân tích dữ liệu JSON
app.use(express.urlencoded({ extended: true })); // Phân tích dữ liệu URL-encoded
app.use(cors());

module.exports = app; // Xuất Express app