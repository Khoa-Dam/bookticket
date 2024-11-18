import React from 'react';
import FlightCard from './FlyCard';

interface FlightListProps {
    loading: boolean;
    error: string | null;
    flights: Array<{ id?: number; airline: string; price: string; time: string }>;
    departure: string;
    destination: string;
    departureDate: string;
}

const FlightList: React.FC<FlightListProps> = ({ loading, error, flights, departure, destination, departureDate }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md mt-2">
            {loading ? ( // Show loading state
                <p>Loading flights...</p>
            ) : error ? ( // Show error message
                <p className="text-red-500">{error}</p>
            ) : flights && flights.length > 0 ? (
                flights.map((flight, index) => (
                    <div key={index} className="flex justify-between items-center border-b pb-2 mb-2">
                        <FlightCard
                            departure={departure}
                            destination={destination}
                            airline={flight.airline}
                            price={flight.price}
                            time={flight.time}
                            id={flight.id}
                            departureDate={departureDate}
                        />
                    </div>
                ))
            ) : (
                <p>No flights available.</p> // Handle case when there are no flights
            )}
        </div>
    );
};

export default FlightList;