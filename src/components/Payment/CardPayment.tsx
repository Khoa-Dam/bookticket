import React from 'react';
import { PaymentMethod } from '../../Pages/Payment/PaymentMethod';
import Visa from '../../assets/visa.png';
import Mastercard from '../../assets/mastercard.png';
import JCB from '../../assets/jcb.webp';

interface CardPaymentProps {
    selectedMethod: PaymentMethod;
    setSelectedMethod: (method: PaymentMethod) => void;
}

const CardPayment: React.FC<CardPaymentProps> = ({ selectedMethod, setSelectedMethod }) => {
    return (
        <div>
            <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center space-x-2">
                    <input
                        type="radio"
                        className="form-radio text-blue-600"
                        checked={selectedMethod === 'card'}
                        onChange={() => setSelectedMethod('card')}
                    />
                    <span>Thẻ thanh toán</span>
                </div>
                <div className="flex space-x-2">
                    <img src={Visa} alt="Visa" className="h-6" />
                    <img src={Mastercard} alt="Mastercard" className="h-6" />
                    <img src={JCB} alt="JCB" className="h-6" />
                </div>
            </label>
        </div>
    );
};

export default CardPayment;