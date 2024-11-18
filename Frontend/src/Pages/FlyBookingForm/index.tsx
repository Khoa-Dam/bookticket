import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ContactForm from '../../components/FlyBookingForm/ContactForm'
import FlightSummary from '../../components/FlyBookingForm/FlightSummary'
import PassengerInfo from '../../components/FlyBookingForm/PassengerInfo'
import { ArrowRight } from 'lucide-react'

type FormData = {
    firstName: string
    lastName: string
    phone?: string
    email?: string
    nationality?: string
}

export default function FlightBookingForm() {
    const [formContact, setFormContact] = useState<FormData>({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
    })

    const [forminfor, setForminfor] = useState<FormData>({
        lastName: '',
        firstName: '',
        nationality: ''
    })

    const [errorsContact, setErrorsContact] = useState<{ [key: string]: string }>({});
    const [errorsInfor, setErrorsInfor] = useState<{ [key: string]: string }>({});

    const validateContact = async () => {
        const { firstName, lastName, phone, email } = formContact;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\d{10}$/;
        let formErrors: { [key: string]: string } = {};

        if (!firstName) {
            formErrors.firstName = "Vui lòng nhập họ.";
        }
        if (!lastName) {
            formErrors.lastName = "Vui lòng nhập tên.";
        }
        if (email === "" || email && !emailPattern.test(email)) {
            formErrors.email = "Vui lòng nhập địa chỉ email hợp lệ.";
        }
        if (phone === "" || phone && !phonePattern.test(phone)) {
            formErrors.phone = "Vui lòng nhập số điện thoại hợp lệ (10 chữ số).";
        }
        setErrorsContact(formErrors);
        return Object.keys(formErrors).length === 0;
    }

    const validateInfort = async () => {
        const { lastName, firstName, nationality } = forminfor;
        let formErrors: { [key: string]: string } = {};
        if (!firstName) {
            formErrors.firstName = "Vui lòng nhập họ.";
        }
        if (!lastName) {
            formErrors.lastName = "Vui lòng nhập tên.";
        }
        if (!nationality) {
            formErrors.nationality = "Vui lòng nhập quốc tịch.";
        }
        setErrorsInfor(formErrors);
        return Object.keys(formErrors).length === 0;
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormContact(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleInputInfor = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setForminfor(prev => ({ ...prev, [name]: value }))
    }
    const location = useLocation();
    const { departure, destination, airline, price, time, departureDate, id } = location.state || {};

    const navigate = useNavigate()


    const handleSubmit = () => {
        validateContact().then(contactValid => {
            if (contactValid) {
                validateInfort().then(infortValid => {
                    if (infortValid)
                        navigate('/Payment', { state: { departure, destination, airline, price, time, departureDate, id, formContact, forminfor } })
                })
            }
        })
    }


    return (
        <div className="bg-[#f8f9fa]">
            <div className="container mx-auto p-4 ">
                <div className="grid gap-6 md:grid-cols-3">
                    {/* Contact Information Form */}
                    <div className="col-span-2">
                        <div className="bg-white p-6 rounded-lg shadow-md sm:ml-20 ml-12 w-3/4">
                            <ContactForm
                                formData={formContact}
                                handleInputChange={handleInputChange}
                                errors={errorsContact} />
                        </div>
                        <div className="bg-white mt-7 p-6 rounded-lg shadow-md sm:ml-20 ml-10 w-3/4">
                            <PassengerInfo
                                forminfor={forminfor}
                                handleInputInfor={handleInputInfor}
                                errors={errorsInfor}
                            />
                        </div>
                    </div>

                    {/* Flight Summary */}
                    <FlightSummary
                        departure={departure}
                        destination={destination}
                        airline={airline}
                        price={price}
                        time={time}
                        departureDate={departureDate}
                    />
                </div>
                <button
                    className="group flex m-auto z-50items-center mt-8 justify-center gap-2 rounded-full bg-[#FF4D00] px-6 py-3 text-white transition-all hover:bg-[#e64600] focus:outline-none focus:ring-2 focus:ring-[#FF4D00] focus:ring-offset-2 "
                    type="button"
                    aria-label="Tiếp tục đến phần thanh toán"
                    onClick={handleSubmit}
                >
                    <span className="text-base font-medium">Tiếp tục đến phần thanh toán</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </button>

            </div>
        </div>
    )
}