const app = require("./middlewares/app");
const connection = require("./config/database");
const PORT = 3000; // Đặt port cho backend
const router = require("./router/api");

app.use('/api', router);
(async () => {
    try {
        await connection.getConnection(); // Kiểm tra kết nối
        console.log("Database connected successfully!");
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
    }
})();
