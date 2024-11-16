import React from 'react';
import { AlertTriangle, ChevronDown } from 'lucide-react';
import TextInput from './TextInput';

interface PassengerInfoProps {
    forminfor: {
        firstName: string;
        lastName: string;
        nationality?: string;
    };
    handleInputInfor: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    errors: { [key: string]: string };
}

const PassengerInfo: React.FC<PassengerInfoProps> = ({ forminfor, handleInputInfor, errors }) => {
    return (
        <div className="mb-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Thông tin hành khách</h2>
            </div>
            <h3 className="text-lg font-medium mb-4">Người lớn 1</h3>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <div className="flex">
                    <AlertTriangle className="h-5 w-5 text-yellow-400 mr-2" />
                    <div>
                        <p className="text-sm text-gray-700">Vui lòng chú ý cho những điều sau đây:</p>
                        <p className="text-sm text-gray-700">Bạn phải nhập chính xác tên như trong CCCD của mình.</p>
                        <a href="#" className="text-blue-500 hover:text-blue-600 text-sm">
                            Xem hướng dẫn nhập tên
                        </a>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <TextInput
                        label="Họ (vd: Dam)"
                        name="lastName"
                        value={forminfor.lastName}
                        onChange={handleInputInfor}
                        required
                        helperText="Như CMND (không dấu)"
                        error={errors.lastName}
                    />

                    <TextInput
                        label="Tên Đệm & Tên (vd: Dam Ngoc Khoa)"
                        name="firstName"
                        value={forminfor.firstName}
                        onChange={handleInputInfor}
                        required
                        helperText="Như CMND (không dấu)"
                        error={errors.firstName}
                    />
                </div>

                <div className="relative">
                    <label htmlFor="nationality" className="block text-sm font-medium text-gray-700 mb-1">
                        Quốc tịch<span className="text-red-500">*</span>
                    </label>
                    <select
                        id="nationality"
                        name="nationality"
                        value={forminfor.nationality}
                        onChange={handleInputInfor}
                        className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 rounded-md"

                    >
                        <option value="">Chọn quốc tịch</option>
                        <option value="VN">Việt Nam</option>
                        <option value="US">United States</option>
                        <option value="GB">United Kingdom</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pt-6">
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                    </div>
                    {errors.nationality && <p className="mt-1 text-sm text-red-500">{errors.nationality}</p>}
                </div>
            </div>
        </div>
    );
};

export default PassengerInfo;