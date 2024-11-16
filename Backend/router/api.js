const express = require("express");
const { getAllFlights, postBookingFlight } = require("../controllers/flightController");
const router = express.Router(); // Không cần import app ở đây

// Route lấy danh sách chuyến bay
router.get("/flights", getAllFlights); // Sửa đường dẫn

// Route đặt chuyến bay
router.post("/booking-flight", postBookingFlight); // Sử dụng router.post

module.exports = router; // Xuất router