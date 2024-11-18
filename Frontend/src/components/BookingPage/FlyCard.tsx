import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
interface Tab {
    id: string
    label: string
}


interface FlightCardProps {
    airline: string;
    price: string;
    time: string;
    departure: string;
    destination: string;
    departureDate: string;
    id?: number;
}
const tabs: Tab[] = [
    { id: 'details', label: 'Chi tiết' },
    { id: 'services', label: 'Các lợi ích đi kèm' },
    { id: 'refund', label: 'Hoàn vé' },
    { id: 'schedule', label: 'Đổi lịch' },
    { id: 'promotions', label: 'Khuyến mãi' }
]

const FlightCard: React.FC<FlightCardProps> = ({ departure, destination, airline, price, time, departureDate, id }) => {
    const [activeTab, setActiveTab] = useState<string>('details')
    const navigate = useNavigate();



    const handleClick = () => {
        navigate('/FlyBookingForm', {
            state: {
                departure,
                destination,
                airline,
                price,
                time,
                departureDate,
                id
            }
        });
    }

    return (
        <div className="w-full p-4 bg-white rounded-lg shadow-md">
            <div className="space-y-4">
                {/* Flight Info Section */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="font-medium">{airline}</span>
                        <span className="text-sm text-gray-500">Mã chuyến bay: {id}</span>
                    </div>
                    <div className="text-right">
                        <span className="text-lg font-bold text-orange-500">{price}</span>
                        <span className="text-sm text-gray-500 block">/khách</span>
                    </div>
                </div>

                {/* Flight Time Section */}
                <div className="flex items-center justify-between">
                    <div className="text-center">
                        <div className="text-xl font-bold">{time}</div>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="sm:flex grid grid-cols-5 space-x-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 py-2 text-xs font-medium rounded-md transition-colors ${activeTab === tab.id
                                ? 'bg-blue-50 text-blue-600'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Action Button */}
                <button className="w-52 float-right py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors" onClick={handleClick}>
                    Chọn
                </button>
            </div>
        </div>
    )
}

export default FlightCard