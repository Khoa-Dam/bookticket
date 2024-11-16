import React from 'react';

interface AirlineSelectorProps {
    airlines: string[]; // Array of airline names
}

const AirlineSelector: React.FC<AirlineSelectorProps> = ({ airlines }) => {
    return (
        <ul>
            {airlines.map((airline, index) => (
                <li key={index}>
                    <input type="checkbox" id={`airline-${index}`} />
                    <label htmlFor={`airline-${index}`}>{airline}</label>
                </li>
            ))}
        </ul>
    );
};

export default AirlineSelector;