import { useEffect, useRef, useState } from 'react'
import DigitalWalletPayment from '../../components/Payment/WalletDigital'
import { PaymentMethod, paymentMethodList } from './PaymentMethod'
import CardPayment from '../../components/Payment/CardPayment'
import PaymentMethodList from '../../components/Payment/PaymentMethodList'
import { useLocation, useNavigate } from 'react-router-dom'
import FlightSummary from '../../components/Payment/FlightSummary'
import { postBookingFlight } from '../../services/apiService'


export default function PaymentMethods() {
    const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('digital-wallet')
    const [successMessage, setSuccessMessage] = useState<string>(''); // State cho thông báo thành công
    const location = useLocation();
    const navigate = useNavigate();
    const { departure, destination, airline, price, time, departureDate, id, formContact, forminfor } = location.state || {};

    const messageRef = useRef<HTMLDivElement>(null);

    const handleSubmit = async () => {
        const data = {
            code: id,
            firstName: forminfor.firstName,
            lastName: forminfor.lastName,
            email: formContact.email,
            phone: formContact.phone,
            departureDate: departureDate.toISOString().split('T')[0],
            departure: departure,
            destination: destination,
            price: price
        };
        try {
            const response = await postBookingFlight(data);
            console.log('Success:', response.data);
            setSuccessMessage('Đặt vé thành công!');


        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (messageRef.current && !messageRef.current.contains(event.target as Node)) {
                setSuccessMessage('');
                setTimeout(() => {
                    navigate('/');
                }, 3000);
            }
        };

        // Thêm sự kiện click
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Xóa sự kiện khi component unmount
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [messageRef]);

    return (
        <div className="bg-[#f8f9fa]">
            <div className="max-w-6xl max-h-full bg-white mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
                <div className="lg:col-span-2">
                    <h2 className="text-xl font-semibold mb-6">Bạn muốn thanh toán thế nào?</h2>

                    <div className="space-y-4 h-full">
                        <DigitalWalletPayment
                            selectedMethod={selectedMethod}
                            setSelectedMethod={setSelectedMethod}
                        />

                        {/* Credit/Debit Cards */}
                        <CardPayment
                            selectedMethod={selectedMethod}
                            setSelectedMethod={setSelectedMethod}
                        />

                        {/* Other payment methods */}
                        <PaymentMethodList
                            paymentMethodsList={paymentMethodList as PaymentMethodList[]}
                            selectedMethod={selectedMethod}
                            setSelectedMethod={setSelectedMethod}
                        />
                        {selectedMethod !== 'vietqr' && (
                            <button
                                className="group flex m-auto items-center mt-8 justify-center gap-2 rounded-full w-full bg-[#FF4D00] px-6 py-3 text-white transition-all hover:bg-[#e64600] focus:outline-none focus:ring-2 focus:ring-[#FF4D00] focus:ring-offset-2 "
                                type="button"
                                aria-label=""
                                onClick={handleSubmit}
                            >
                                <span className="text-base font-medium">Thanh Toán</span>

                            </button>
                        )}
                    </div>
                </div>

                {/* Flight Summary Card */}
                <FlightSummary
                    id={id}
                    departure={departure}
                    destination={destination}
                    time={time}
                    departureDate={departureDate}
                    airline={airline}
                    price={price}
                    forminfor={forminfor}
                    formContact={formContact}
                />
            </div>

            {successMessage && (
                <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-50 ">
                    <div ref={messageRef} className="bg-white p-4 rounded shadow-md">
                        <p className="text-lg font-semibold text-center">{successMessage}</p>
                        <p className="text-lg font-semibold text-center">Vé sẽ được gửi tới email của bạn! Hãy sử dụng nó để lên máy bay</p>
                    </div>
                    <FlightSummary
                        id={id}
                        departure={departure}
                        destination={destination}
                        time={time}
                        departureDate={departureDate}
                        airline={airline}
                        price={"Đã thanh toán thành công"}
                        forminfor={forminfor}
                        formContact={formContact}
                    />
                </div>
            )}
        </div>
    )
}