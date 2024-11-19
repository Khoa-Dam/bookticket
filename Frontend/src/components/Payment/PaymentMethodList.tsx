import React, { useEffect, useState } from 'react';
import { PaymentMethod } from '../../Pages/Payment/PaymentMethod';
import { postCodeQR } from '../../services/apiService';

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
    dataQR: any;
}


const PaymentMethodList: React.FC<PaymentMethodListProps> = ({ paymentMethodsList, selectedMethod, setSelectedMethod, dataQR }) => {
    const [qrCodeUrl, setQrCodeUrl] = useState<any>("");
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const generateQRCode = async () => {
            try {
                const response = await postCodeQR(dataQR);
                setQrCodeUrl(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error calling API:', error);
                setLoading(false);
            }
        };

        generateQRCode();
    }, []);

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
                                onChange={() => { setSelectedMethod(method.id) }}

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
                            {loading ? (
                                <div className="flex justify-center">
                                    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
                                </div>
                            ) : (
                                <ul className="text-sm text-gray-600 mb-4 list-disc list-inside space-y-1">
                                    <li>Quét mã QR để thanh toán</li>
                                </ul>
                            )}
                            <div className="flex justify-center"

                            >
                                <img src={qrCodeUrl.qrDataURL} alt="QRcode" className="h-64" />
                            </div>
                        </div>
                    )}
                </div>
            ))}

        </div>
    );
};

export default PaymentMethodList;