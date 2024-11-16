import React from 'react';
import { PaymentMethod } from '../../Pages/Payment/PaymentMethod';

import QRcode from '../../assets/QRcode.jpg';

interface PaymentMethodList {
    id: PaymentMethod;
    label: string;
    status?: string;
    icons: string[];
}

interface PaymentMethodListProps {
    paymentMethodsList: PaymentMethodList[];
    selectedMethod: PaymentMethod;
    setSelectedMethod: (method: PaymentMethod) => void;
}

const PaymentMethodList: React.FC<PaymentMethodListProps> = ({ paymentMethodsList, selectedMethod, setSelectedMethod }) => {
    return (
        <div>
            {paymentMethodsList.map((method) => (
                <div key={method.id}>
                    <label className="flex items-center justify-between cursor-pointer">
                        <div className="flex items-center space-x-2">
                            <input
                                type="radio"
                                className="form-radio text-blue-600"
                                checked={selectedMethod === method.id}
                                onChange={() => setSelectedMethod(method.id)}
                            />
                            <span>{method.label}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            {method.status && (
                                <span className="text-sm text-gray-500">{method.status}</span>
                            )}

                        </div>
                    </label>
                    {method.id === 'vietqr' && selectedMethod === 'vietqr' && (
                        <div className="mt-3 ml-6 p-4 bg-blue-50 rounded-lg flex flex-col items-center">
                            <ul className="text-sm text-gray-600 mb-4 list-disc list-inside space-y-1">
                                <li>Quét mã QR để thanh toán</li>
                            </ul>
                            <div className="flex justify-center">
                                <img src={QRcode} alt="QRcode" className="h-80" />
                            </div>
                        </div>
                    )}
                </div>
            ))}

        </div>
    );
};

export default PaymentMethodList;