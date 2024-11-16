// AirportInput.jsx
import PropTypes from 'prop-types';
import AirportDropdown from './DropDown';

interface AirportInputProps {
    label: string;
    placeholder?: string;
    value: string;
    onFocus: () => void;
    onBlur: () => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    showDropdown: boolean;
    onSelect: (value: string) => void;
    errorMessage?: string;
    icon: React.ElementType;
}
const AirportInput = ({
    label,
    placeholder,
    value,
    onFocus,
    onBlur,
    onChange,
    showDropdown,
    onSelect,
    errorMessage,
    icon: Icon
}: AirportInputProps) => {
    return (
        <div className='grid sm:grid-row-2 gap-1'>
            <label className='text-sm font-semibold text-gray-600'>{label}</label>
            <div className='relative'>
                <Icon className='sm:absolute sm:top-1 sm:-left-2 hidden' />
                <input
                    className="border-b-2 border-gray-500 pl-4 focus:outline-none sm:w-full w-32"
                    type='text'
                    placeholder={placeholder}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    value={value}
                    onChange={onChange}
                />
                {showDropdown && (
                    <AirportDropdown
                        value={value}
                        onSelect={onSelect}
                    />
                )}
                <div>
                    {errorMessage && <p className="absolute rounded-md p-2 text-white bg-gray-600 -top-20 max-w-max">{errorMessage}<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full border-t-8 border-t-gray-600 border-l-8 border-l-transparent border-r-8 border-r-transparent"></div></p>
                    }
                </div>
            </div>
        </div>
    );
};

AirportInput.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onFocus: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    showDropdown: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
    icon: PropTypes.elementType.isRequired // icon should be a React component
};

export default AirportInput;
