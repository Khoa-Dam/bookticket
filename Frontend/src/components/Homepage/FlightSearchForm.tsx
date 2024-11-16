import React from 'react';
interface FlightSearchFormProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void; // Ensure this matches
}
const FlightSearchForm: React.FC<FlightSearchFormProps> = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className='col-span-3 mt-4 flex justify-center'>
                <button type="submit" className="p-3 bg-[#56adff] text-white py-2 rounded hover:bg-[#3f8fda] transition duration-200">
                    Tìm chuyến bay
                </button>
            </div>
        </form>
    );
};

export default FlightSearchForm;