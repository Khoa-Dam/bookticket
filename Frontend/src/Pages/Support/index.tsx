import React, { useState } from 'react';
import { Search, ChevronRight, Globe, User, Plane, Building2, Ticket, MapPin, CreditCard, Shield } from 'lucide-react';

interface PopularTopic {
    id: number;
    title: string;
}

const popularTopics: PopularTopic[] = [
    { id: 1, title: 'Cách đổi lịch vé máy bay của tôi' },
    { id: 2, title: 'Đặt chỗ trực tiếp để đảm bảo an toàn' },
    { id: 3, title: 'Cách huỷ vé và hoàn tiền cho đặt chỗ máy bay' },
    { id: 4, title: 'Cách sửa hoặc đổi tên hành khách bay' },
    { id: 5, title: 'Cách huỷ phòng và hoàn tiền cho đặt phòng khách sạn' },
    { id: 6, title: 'Cách đổi lịch đặt phòng khách sạn của tôi' },
    { id: 7, title: 'Cách làm thủ tục trực tuyến' },
    { id: 8, title: 'Lời hứa hoàn lại tiền trên Traveloka' },
];

const productCategories = [
    { id: 1, icon: <Globe className="w-8 h-8" />, title: 'Thông tin chung' },
    { id: 2, icon: <User className="w-8 h-8" />, title: 'Tài khoản và bảo mật' },
    { id: 3, icon: <Plane className="w-8 h-8" />, title: 'Vé máy bay' },
    { id: 4, icon: <Building2 className="w-8 h-8" />, title: 'Khách sạn' },
    { id: 5, icon: <Ticket className="w-8 h-8" />, title: 'Hoạt động du lịch' },
    { id: 6, icon: <MapPin className="w-8 h-8" />, title: 'Đưa đón sân bay' },
    { id: 7, icon: <CreditCard className="w-8 h-8" />, title: 'TravelPay' },
    { id: 8, icon: <Shield className="w-8 h-8" />, title: 'EPIC Sale' },
];

const SupportCenter: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl font-bold text-white mb-2">
                        Trung tâm Hỗ trợ
                    </h1>
                    <p className="text-white mb-8">Mọi câu trả lời dành cho bạn</p>

                    {/* Search Bar */}
                    <div className="relative max-w-2xl mx-auto">
                        <input
                            type="text"
                            className="w-full px-4 py-3 pl-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Nhập chủ đề ở đây (ví dụ hoàn tiền)"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Popular Topics */}
                <div className="mb-12">
                    <h2 className="text-xl font-semibold mb-4">Chủ đề phổ biến</h2>
                    <div className="space-y-2">
                        {popularTopics.map((topic) => (
                            <button
                                key={topic.id}
                                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 rounded-lg group"
                            >
                                <span className="text-gray-700">{topic.title}</span>
                                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Categories */}
                <div>
                    <h2 className="text-xl font-semibold mb-6">Phân loại theo sản phẩm</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {productCategories.map((category) => (
                            <button
                                key={category.id}
                                className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                <div className="text-blue-500 mb-2">{category.icon}</div>
                                <span className="text-sm text-center text-gray-700">{category.title}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Need Help Section */}
                <div className="mt-12 text-center">
                    <h2 className="text-xl font-semibold mb-4">Bạn cần giúp đỡ?</h2>
                    <p className="text-gray-600 mb-4">
                        Để được hỗ trợ thêm, vui lòng quét mã QR bên dưới để liên hệ với dịch vụ khách hàng của chúng tôi.
                    </p>
                    <button className="text-blue-500 hover:text-blue-600 font-medium">
                        Liên hệ chúng tôi
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SupportCenter;