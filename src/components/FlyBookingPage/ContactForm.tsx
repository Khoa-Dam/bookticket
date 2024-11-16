import React from 'react';
import { ChevronDown } from 'lucide-react';
import TextInput from './TextInput';

type FormData = {
    firstName: string;
    lastName: string;
    phone?: string;
    email?: string;
};

interface ContactFormProps {
    formData: FormData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errors: { [key: string]: string };
}

const ContactForm: React.FC<ContactFormProps> = ({ formData, handleInputChange, errors }) => {
    return (
        <>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Thông tin liên hệ</h2>
            </div>
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <TextInput
                        label="Họ (vd: Nguyen)"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        helperText="Như CMND (không dấu)"
                        error={errors.lastName}
                    />
                    <TextInput
                        label="Tên Đệm & Tên (vd: Dam Ngoc Khoa)"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        helperText="Như CMND (không dấu)"
                        error={errors.firstName}
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Điện thoại di động<span className="text-red-500">*</span>
                        </label>
                        <div className="flex">
                            <div className="relative">
                                <select className="appearance-none bg-gray-100 border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500">
                                    <option>+84</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <ChevronDown className="h-4 w-4" />
                                </div>
                            </div>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="flex-1 sm:px-3 sm:py-2 p-0 border border-gray-300 rounded-r-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <p className="mt-1 text-sm text-gray-500">VD: +84 366567466 trong đó (+84) là mã quốc gia và 366567466 là số di động</p>
                        {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                    </div>
                    <TextInput
                        label="Email"
                        name="email"
                        value={formData.email || ''}
                        onChange={handleInputChange}
                        required
                        helperText="VD: email@example.com"
                        error={errors.email}
                    />
                </div>
            </form>
        </>
    );
};

export default ContactForm;