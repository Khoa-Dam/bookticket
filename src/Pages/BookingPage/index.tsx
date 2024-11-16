import { FaPlane } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { flights } from '../../Types/Book';
import { getAllFlights } from '../../services/apiService';
import FlyData from '../../components/BookingPage/FlyData';
import TimeSlotSelector from '../../components/BookingPage/TimeSelector';
import AirlineSelector from '../../components/BookingPage/AirlineSelector';
import FlightList from '../../components/BookingPage/FlightList';

const timeSlots = [
  "00:00 - 06:00",
  "06:00 - 12:00",
  "12:00 - 18:00",
  "18:00 - 24:00"
];

const airlines = [
  "AirAsia Indonesia",
  "Garuda Indonesia",
  "Novi Air",
  "YuanNusa",
  "BBN Airlines Indonesia",
  "Super Air Jet",
  "Sky High",
  "FlyFast",
  "JetStream"
];
const BookingPage = () => {

  const [flights, setFlights] = useState<flights[] | null>();
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await getAllFlights();
        console.log("check response.data", response);
        setFlights(response.data as flights[]);
        console.log("check flights", flights);
        console.log("check flights", flights?.length);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFlights();
  }, []);

  const location = useLocation();
  const { departureDate, departure, destination } = location.state || {};

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="flex">
        <div className="w-1/4 bg-white p-4 rounded-lg shadow-md">
          <h2 className="font-semibold mb-2">Hãng hàng không</h2>
          <AirlineSelector airlines={airlines} />

          <h2 className="font-semibold mt-4 mb-2">Thời gian bay</h2>
          <div className="flex justify-between">
            <span>0h</span>
            <span>15h</span>
          </div>
          <input type="range" min="0" max="15" className="w-full" />

          <TimeSlotSelector title="Giờ cất cánh" timeSlots={timeSlots} />


          <TimeSlotSelector title="Giờ hạ cánh" timeSlots={timeSlots} />
        </div>

        <div className="w-3/4 ml-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center bg-blue-500 p-4 rounded-lg shadow-md">
              <div className="text-white">
                <h1 className="text-xl font-bold">{departure} - {destination}</h1>
                <p>{departureDate ? new Date(departureDate).toLocaleDateString() : ''}</p>
              </div>
              <div className="bg-white p-2 rounded-full shadow-md">
                <FaPlane className="w-8 h-8 text-blue-500" />
              </div>
            </div>
            <FlyData />
          </div>
          <h2 className="text-lg font-semibold mt-4">Best flights from your search</h2>
          <FlightList loading={loading} error={error} flights={flights as flights[]} departure={departure} destination={destination} departureDate={departureDate} />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;