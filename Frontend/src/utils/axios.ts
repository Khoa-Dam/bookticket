import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 10000,
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