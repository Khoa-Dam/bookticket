import axiosInstance from "../utils/axios";

// const postCreateNewUser = (email, password, username, role, image) => {
//     //submit data
//     const data = new FormData();
//     data.append('email', email);
//     data.append('password', password);
//     data.append('username', username);
//     data.append('role', role);
//     data.append('userImage', image);
//     return axiosInstance.post('api/v1/participant', data);
// }

// const putUpdateUser = (id, username, role, image) => {
//     //submit data
//     const data = new FormData();
//     data.append('id', id);
//     data.append('username', username);
//     data.append('role', role);
//     data.append('userImage', image);
//     return axiosInstance.put('api/v1/participant', data);
// }

const getAllFlights = () => {

    return axiosInstance.get('flights');

}

const postBookingFlight = (data: any) => {
    return axiosInstance.post('booking-flight', data);
};


export { getAllFlights, postBookingFlight };