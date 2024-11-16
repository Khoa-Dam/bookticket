import React from 'react';

interface TimeSlotSelectorProps {
    title: string; // Title for the time slot section
    timeSlots: string[]; // Array of time slots
}

const TimeSlotSelector: React.FC<TimeSlotSelectorProps> = ({ title, timeSlots }) => {
    return (
        <div>
            <h2 className="font-semibold mt-4 mb-2">{title}</h2>
            <div className="sm:grid sm:grid-cols-2 gap-2">
                {timeSlots.map((slot, index) => (
                    <button key={index} className="border p-2 rounded">
                        {slot}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TimeSlotSelector;