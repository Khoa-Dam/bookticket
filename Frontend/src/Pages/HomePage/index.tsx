import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import videoHomepage from "../../assets/video.mp4";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import Icon from '../../components/Homepage/icon';
import AirportInput from "../../components/Homepage/AirportInput";
import DatePickerComponent from "../../components/Homepage/DatePicker";

const links = [
    { name: 'Đặt vé', href: '' },
    { name: 'Gửi hành lý', href: '' },
];

const startOfToday = new Date();
startOfToday.setHours(0, 0, 0, 0);

const endOfToday = new Date(startOfToday);
endOfToday.setDate(endOfToday.getDate() + 1);
endOfToday.setSeconds(endOfToday.getSeconds() - 1);



export default function HomePage() {
    const [departure, setDeparture] = React.useState<string>("Hồ Chí Minh (SGN)");
    const [destination, setDestination] = React.useState<string>("Hà Nội (HAN)");
    const [showDepartureDropdown, setShowDepartureDropdown] = React.useState<boolean>(false);
    const [showDestinationDropdown, setShowDestinationDropdown] = React.useState<boolean>(false);
    const [searchDeparture, setSearchDeparture] = React.useState<string>("Hồ Chí Minh (SGN)");
    const [searchDestination, setSearchDestination] = React.useState<string>("Hà Nội (HAN)");
    const [errorMessagedep, setErrorMessagedep] = React.useState<string>("");
    const [errorMessagedis, setErrorMessagedis] = React.useState<string>("");
    const [errorMessagedate, setErrorMessagedate] = React.useState<string>("");
    const [showError, setShowError] = useState(false);
    const [departureDate, setDepartureDate] = useState<Date | null>(null);
    const navigate = useNavigate();


    const handleAirportSelect = (selectedAirport: string, type: "departure" | "destination") => {
        if (type === "departure") {
            setDeparture(selectedAirport);
            setSearchDeparture(selectedAirport);
            setShowDepartureDropdown(false);
        } else if (type === "destination") {
            setDestination(selectedAirport);
            setSearchDestination(selectedAirport);
            setShowDestinationDropdown(false);
        }
    };



    const checkInputs = (): boolean => {
        if (!searchDeparture) {
            setErrorMessagedep("Vui lòng chọn điểm cất cánh.");
            return false;
        }
        if (searchDeparture === searchDestination) {
            setErrorMessagedep("Departure và Destination không thể giống nhau!");
            return false;
        }
        setErrorMessagedep("");

        if (!searchDestination) {
            setErrorMessagedis("Vui lòng chọn điểm hạ cánh.");
            return false;
        }
        setErrorMessagedis("");


        if (!departureDate) {
            setErrorMessagedate("Vui lòng chọn ngày cất cánh.");
            return false;
        }

        setErrorMessagedate("");
        return true;
    };

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>, type: "departure" | "destination") => {
        const value = event.currentTarget.value;

        if (type === "departure") {
            setSearchDeparture(value);
            setShowDepartureDropdown(true);
        } else if (type === "destination") {
            setSearchDestination(value);
            setShowDestinationDropdown(true);
        }
        checkInputs();
    };

    const handleBlur = (type: "departure" | "destination") => {
        setTimeout(() => {
            if (type === "departure") {
                setShowDepartureDropdown(false);
            } else if (type === "destination") {
                setShowDestinationDropdown(false);
            }
        }, 150);
    };

    const handleExpandedSearch = () => {
        navigate("/BookingPage", { state: { departureDate, departure, destination } });
    };

    const handleSearchClick = (event: any) => {

        event.preventDefault();
        if (checkInputs()) {
            handleExpandedSearch();
        } else {
            setShowError(true);
        }
    };
    useEffect(() => {
        checkInputs();
    }, [searchDeparture, searchDestination, departureDate]);

    return (
        <div className="min-h-full">
            <main className="relative isolate overflow-hidden py-24 sm:py-20 w-full min-h-screen flex flex-col md:flex-row">
                <video autoPlay muted loop className='absolute w-screen h-95 object-cover opacity-3 top-0 left-0 bottom-0 right-0 '>
                    <source src={videoHomepage} type="video/mp4" />
                </video>
                <div className="sm:absolute sm:ml-44 sm:mt-12 sm:max-w-full sm:px-6 lg:px-8 sm:flex-col sm:items-center sm:justify-center relative z-10 px-4 flex flex-col items-center justify-center">
                    <div className='relative'>
                        <div className="max-w-2xl lg:mx-0">
                            <h2 className="text-base font-bold tracking-tight text-white sm:text-3xl ">BOOK YOUR FLIGHT</h2>
                            <p className="mt-3 text-lg leading-5 text-white">Đưa bạn đến bất cứ đâu</p>
                        </div>
                        <div className="mx-auto mt-5 max-w-2xl lg:mx-0 lg:max-w-none">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                                {links.map((link) => (
                                    <Link key={link.name} to={link.href} className='transition-transform duration-300 ease-in-out hover:translate-x-0.5 hover:text-[#1c89e3]'>
                                        {link.name} <span aria-hidden="true">&rarr;</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <form className='relative px-8 py-8 bg-white-color rounded-xl grid grid-cols-1 md:grid-cols-3 gap-4' >
                            <div className='col-span-2 flex flex-col md:flex-row justify-center space-x-5'>
                                <div className='flex  justify-center w-full'>
                                    <AirportInput
                                        label="Đi từ"
                                        placeholder="Nhập vào điểm đi"
                                        value={searchDeparture}
                                        onFocus={() => setShowDepartureDropdown(true)} // Hiện dropdown khi focus
                                        onBlur={() => handleBlur("departure")}
                                        onChange={(event) => onInputChange(event, "departure")}
                                        showDropdown={showDepartureDropdown}
                                        onSelect={(selectedAirport) => handleAirportSelect(selectedAirport, "departure")}
                                        errorMessage={errorMessagedep}
                                        icon={FaPlaneDeparture}
                                    />
                                    <div className='flex items-center w-6 h-6 relative top-1/2 mx-4'>
                                        <Icon />
                                    </div>
                                    <AirportInput
                                        label="Đến"
                                        placeholder="Nhập điểm muốn đến"
                                        value={searchDestination}
                                        onFocus={() => setShowDestinationDropdown(true)} // Hiện dropdown khi focus
                                        onBlur={() => handleBlur("destination")}
                                        onChange={(event) => onInputChange(event, "destination")}
                                        showDropdown={showDestinationDropdown}
                                        onSelect={(selectedAirport) => handleAirportSelect(selectedAirport, "destination")}
                                        errorMessage={errorMessagedis}
                                        icon={FaPlaneArrival}
                                    />
                                </div>
                            </div>
                            <div className='grid grid-row-2 gap-1 '>
                                <DatePickerComponent
                                    selectedDate={departureDate}
                                    onDateChange={setDepartureDate}
                                    errorMessage={errorMessagedate}
                                />

                            </div>
                            <div className="relative w-full md:left-60 justify-center">
                                <button
                                    onClick={handleSearchClick}
                                    className=" mt-4 px-4 py-2 bg-[#fc615c] text-white font-semibold rounded-lg hover:bg-[#e0440e] transition duration-200"
                                >
                                    Tìm chuyến bay
                                </button>
                                {/* Modal hiển thị thông báo lỗi */}
                                {showError && (
                                    <div className="fixed inset-0 flex items-center justify-center z-50">
                                        <div className="bg-black bg-opacity-50 fixed inset-0"></div> {/* Mờ xung quanh */}
                                        <div className="bg-white p-8 rounded-lg shadow-lg relative z-10 sm:max-w-md sm:mx-auto max-w-sm mx-4 mt-0">
                                            <h2 className="text-lg font-bold mb-4">Lỗi</h2>
                                            <p className="text-gray-700 mb-4">Vui lòng kiểm tra các trường nhập liệu.</p>
                                            <button
                                                onClick={() => setShowError(false)} // Đóng modal khi nhấn nút
                                                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition "
                                            >
                                                Đóng
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>

    );
}