import React from 'react';
import { Plane, Check, Shield } from 'lucide-react'; // Thay thế bằng thư viện icon bạn đang sử dụng

interface FlightSummaryProps {
    id: string;
    departure: string;
    destination: string;
    time: string;
    departureDate: Date;
    airline: string;
    price: string;
    forminfor: {
        firstName: string;
        lastName: string;
    };
}

const FlightSummary: React.FC<FlightSummaryProps> = ({
    id,
    departure,
    destination,
    time,
    departureDate,
    airline,
    price,
    forminfor,
}) => {
    return (
        <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                    <Plane className="h-5 w-5" />
                    <span className="font-medium">Tóm tắt vé máy bay</span>
                </div>
                <span className="text-sm text-gray-500">Mã đặt chỗ: {id}</span>
            </div>

            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="font-medium">{departure}</p>
                        <p className="text-sm text-gray-500">{time.split("-")[0]}</p>
                        <p className="text-sm text-gray-500">{departureDate.toString()}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-500">1h 55m</p>
                        <div className="flex items-center">
                            <div className="h-px w-12 bg-gray-300"></div>
                            <Plane className="h-4 w-4 mx-2 text-gray-400" />
                            <div className="h-px w-12 bg-gray-300"></div>
                        </div>
                        <p className="text-sm text-gray-500">bay thẳng</p>
                    </div>
                    <div className="text-right">
                        <p className="font-medium">{destination}</p>
                        <p className="text-sm text-gray-500">{time.split("-")[1]}</p>
                        <p className="text-sm text-gray-500">{departureDate.toString()}</p>
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">{airline}</span>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Có thể hoàn vé</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Có áp dụng đổi lịch bay</span>
                    </div>
                </div>

                <div className="border-t pt-4">
                    <p className="font-medium">Chi tiết về (các) hành khách</p>
                    <div className="flex items-center space-x-2 mt-2">
                        <span className="text-sm">Mr {forminfor.lastName} {forminfor.firstName} (Người Lớn)</span>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-2">
                        <Shield className="h-5 w-5 text-green-500" />
                        <span className="text-sm font-medium text-green-700">100% SECURITY PAYMENT</span>
                    </div>
                </div>
            </div>
            <div className="border-t pt-4 mt-4">
                <div className="flex justify-between items-center">
                    <span className="font-medium">Giá Thanh toán</span>
                    <span className="text-2xl font-bold text-orange-500">{price}</span>
                </div>
            </div>
        </div>
    );
};

export default FlightSummary;