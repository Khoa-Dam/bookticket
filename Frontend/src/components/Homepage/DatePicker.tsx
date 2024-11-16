import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addMonths, format } from "date-fns";
import { AiOutlineCalendar } from "react-icons/ai";


interface DatePickerComponentProps {
    selectedDate: Date | null;
    onDateChange: (date: Date | null) => void;
    errorMessage?: string;
}

const DatePickerComponent: React.FC<DatePickerComponentProps> = ({
    selectedDate,
    onDateChange,
    errorMessage
}) => {
    return (
        <div className="flex flex-col items-start space-y-2">
            <label className="text-sm font-semibold text-gray-600">Chọn ngày</label>
            <DatePicker
                selected={selectedDate}
                onChange={(date) => onDateChange(date)}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                maxDate={addMonths(new Date(), 3)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholderText="Chọn ngày đi"
            />
            <AiOutlineCalendar className="absolute sm:top-16 sm:right-14 transform sm:-translate-y-1/2 text-gray-500 sm:left-0 left-32 " size={20} />
            <div>
                {errorMessage &&
                    <p className="sm:absolute sm:rounded-md sm:p-2 text-white bg-gray-600 sm:-top-2 sm:max-w-max">{errorMessage}<div className="sm:absolute sm:bottom-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:translate-y-full sm:border-t-8 sm:border-t-gray-600 sm:border-l-8 sm:border-l-transparent sm:border-r-8 sm:border-r-transparent bg-none"></div></p>
                }
            </div>
        </div>
    );
};

export default DatePickerComponent;
