const db = require("../config/database");

const getAllFlights = async (req, res) => {
    const [rows] = await db.query("SELECT * FROM flight");
    return res.status(200).json({
        errorCode: 0,
        data: rows
    })
}

const ensureTableExists = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS booking_flight (
            id INT AUTO_INCREMENT PRIMARY KEY,
            code VARCHAR(255) NOT NULL,
            firstName VARCHAR(255) NOT NULL,
            lastName VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            phone VARCHAR(255) NOT NULL,
            departureDate VARCHAR(255) NOT NULL,
            departure VARCHAR(255) NOT NULL,
            destination VARCHAR(255) NOT NULL,
            price VARCHAR(255) NOT NULL
        )
    `;
    await db.query(query);
};

const postBookingFlight = async (req, res) => {
    try {
        console.log("Check body:", req.body);
        await ensureTableExists();

        const { code, firstName, lastName, email, phone, departureDate, departure, destination, price } = req.body;
        console.log(req.body);
        console.log("Missing fields:", { code, firstName, lastName, email, phone, departureDate, departure, destination, price });
        if (!code || !firstName || !lastName || !email || !phone || !departureDate || !departure || !destination || !price) {
            return res.status(400).json({
                errorCode: 1,
                message: 'Missing required fields: code, firstName, lastName, email, phone, departureDate, departure, destination, price',
            });
        }

        // Chèn dữ liệu vào bảng
        const [result] = await db.query("INSERT INTO booking_flight SET ?", req.body);

        // Trả về phản hồi
        return res.status(200).json({
            errorCode: 0,
            message: 'Booking created successfully',
            data: {
                id: result.insertId,
                ...req.body,
            },
        });
    } catch (error) {
        console.error('Error:', error.message);
        return res.status(500).json({
            errorCode: 2,
            message: 'Internal Server Error',
        });
    }
};

module.exports = { getAllFlights, postBookingFlight };
