import { useState } from 'react'
import DigitalWalletPayment from '../../components/Payment/WalletDigital'
import { PaymentMethod, paymentMethodList } from './PaymentMethod'
import CardPayment from '../../components/Payment/CardPayment'
import PaymentMethodList from '../../components/Payment/PaymentMethodList'
import { useLocation } from 'react-router-dom'
import FlightSummary from '../../components/Payment/FlightSummary'
import { postBookingFlight } from '../../services/apiService'


export default function PaymentMethods() {
    const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('digital-wallet')
    const location = useLocation();
    const { departure, destination, airline, price, time, departureDate, id, formContact, forminfor } = location.state || {};

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
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="max-w-6xl bg-white mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
                <h2 className="text-xl font-semibold mb-6">Bạn muốn thanh toán thế nào?</h2>

                <div className="space-y-4">
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
                            aria-label="Tiếp tục đến phần thanh toán"
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
            />
        </div>
    )
}