import axiosInstance from "../utils/axios";

const getAllFlights = () => {
    return axiosInstance.get('flights');
}

const postBookingFlight = (data: any) => {
    return axiosInstance.post('booking-flight', data);
};

const postCodeQR = (data: any) => {
    return axiosInstance.post('generate-qr-code', data);
}

export { getAllFlights, postBookingFlight, postCodeQR };