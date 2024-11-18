const express = require("express");
const { getAllFlights, postBookingFlight, postCodeQR } = require("../controllers/flightController");
const router = express.Router(); // Không cần import app ở đây

// Route lấy danh sách chuyến bay
router.get("/flights", getAllFlights); // Sửa đường dẫn

// Route đặt chuyến bay
router.post("/booking-flight", postBookingFlight); // Sử dụng router.post

router.post("/generate-qr-code", postCodeQR);

module.exports = router; // Xuất router