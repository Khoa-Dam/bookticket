import { Swiper, SwiperSlide } from 'swiper/react';


const flightData = [
    { date: new Date(), price: "1,834,000 VND" }, // Current date
    { date: new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000), price: "1,689,446 VND" }, // Current date + 1 day
    { date: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000), price: "2,182,000 VND" }, // Current date + 2 days
];
const FlyData = () => {
    return (
        <Swiper spaceBetween={0}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 100 }}
            className="mt-4 bg-blue-500 p-2 rounded-lg shadow-md">
            {flightData.map((flight, index) => (
                <SwiperSlide key={index} className="text-center text-white">
                    <p>{flight.date.toLocaleDateString('vi-VN', { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' })}</p>
                    <p>{flight.price}</p>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default FlyData