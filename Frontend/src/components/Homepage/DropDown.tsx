import PropTypes from 'prop-types';
import React from 'react';
import { PiAirplaneTiltFill } from "react-icons/pi";
import { flyList } from '../../Types/airports'; // Nhập dữ liệu sân bay

const AirportDropdown = ({ value, onSelect }: { value: string, onSelect: (value: string) => void }) => {
    const normalizeString = (str: string): string => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    };

    const highlightText = (text: string, search: string): JSX.Element | string => {
        if (!search) return text;

        const normalizedText = normalizeString(text);
        const normalizedSearch = normalizeString(search);


        const regex = new RegExp(`(${normalizedSearch})`, 'gi');

        // Chia văn bản theo vị trí khớp với chuỗi tìm kiếm đã chuẩn hóa
        const parts = normalizedText.split(regex);

        // Áp dụng highlight vào văn bản gốc dựa trên vị trí của các phần đã chuẩn hóa
        return (
            <>
                {parts.map((part, index) => {
                    const originalPartIndex = normalizedText.indexOf(part);
                    const originalPart = text.slice(
                        originalPartIndex,
                        originalPartIndex + part.length
                    );

                    return normalizeString(part) === normalizedSearch ? (
                        <span key={index} style={{ color: '#0194F3' }}>{originalPart}</span>
                    ) : (
                        originalPart
                    );
                })}
            </>
        );
    };


    const filteredAirports = flyList.filter(airport =>
        normalizeString(airport.name).includes(normalizeString(value)) ||
        normalizeString(airport.code).includes(normalizeString(value)) ||
        normalizeString(airport.location).includes(normalizeString(value))
    );

    console.log("Filtered Airports:", filteredAirports);

    const handleSelectAirport = (airport: { location: string, code: string }) => {
        onSelect(`${airport.location.split(',')[0].trim()} (${airport.code})`);
    };

    return (
        <div className="absolute flex-col w-[500px] mt-1 h-max bg-white border rounded shadow-lg text-black font-medium">
            <div className='p-2 border-b-2'> Thành phố hoặc sân bay phổ biến</div>
            <ul className="min-w-min z-10 w-full max-h-64 overflow-y-auto">
                {filteredAirports.map((airport) => (
                    <li
                        key={airport.code}
                        onClick={() => handleSelectAirport(airport)}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                        <PiAirplaneTiltFill />
                        <div>
                            {highlightText(airport.name, value)}
                            <span className=''> ({highlightText(airport.code, value)})</span>
                        </div>
                        <div className='font-medium text-gray-500 text-sm'>
                            {highlightText(airport.location, value)}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

AirportDropdown.propTypes = {
    value: PropTypes.string.isRequired, // value phải là string và là bắt buộc
    onSelect: PropTypes.func.isRequired, // onSelect phải là function và là bắt buộc
};

export default AirportDropdown;