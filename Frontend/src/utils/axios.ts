import axios from 'axios';

// Tạo một instance của Axios với cấu hình mặc định
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api', // Địa chỉ cơ sở của API
    timeout: 10000, // Thời gian chờ (ms)
    headers: {
        'Content-Type': 'application/json',
    },
});


axiosInstance.interceptors.response.use(
    (response: any) => {
        return response.data;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;