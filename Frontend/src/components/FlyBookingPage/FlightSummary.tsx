import React from 'react';
import { Plane } from 'lucide-react';

interface FlightSummaryProps {
    departure: string;
    destination: string;
    airline: string;
    price: string;
    time: string;
    departureDate: string; // Ensure this is a string
}

const FlightSummary: React.FC<FlightSummaryProps> = ({ departure, destination, airline, price, time, departureDate }) => {
    return (
        <div className="sm:fixed bg-white p-6 rounded-lg shadow-md sm:right-24 sm:max-w-lg ml-5">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Tóm tắt chuyến bay</h2>
            </div>
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="font-medium">{departure}</p>
                        <p className="text-sm text-gray-500">{new Date(departureDate).toLocaleDateString('vi-VN')}</p>
                        <p className="text-sm text-gray-500">{time.split('-')[0]}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-sm text-gray-500">1h 55m</p>
                        <div className="flex items-center">
                            <div className="w-16 h-px bg-gray-300"></div>
                            <Plane className="mx-2 text-gray-400" size={20} />
                            <div className="w-16 h-px bg-gray-300"></div>
                        </div>
                        <p className="text-sm text-gray-500">Bay thẳng</p>
                    </div>
                    <div className="text-right">
                        <p className="font-medium">{destination}</p>
                        <p className="text-sm text-gray-500">{new Date(departureDate).toLocaleDateString('vi-VN')}</p>
                        <p className="text-sm text-gray-500">{time.split('-')[1]}</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                    <span className="text-sm">{airline}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        Có áp dụng đổi lịch bay
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        Có thể hoàn vé
                    </span>
                </div>
                <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between items-center">
                        <span className="font-medium">Giá bán trả</span>
                        <span className="text-2xl font-bold text-orange-500">{parseInt(price).toLocaleString()} VNĐ</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightSummary;