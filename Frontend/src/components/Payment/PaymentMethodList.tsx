import React, { useEffect, useState } from 'react';
import { PaymentMethod } from '../../Pages/Payment/PaymentMethod';

// import QRcode from '../../assets/QRcode.jpg';
// import { getQRCode } from '../../services/apiService';
import axios from 'axios';

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
    useEffect(() => {
        const generateQRCode = async () => {
            const url = 'https://api.vietqr.io/v2/generate';
            const headers = {
                'x-client-id': 'fd695264-589c-4c84-9221-b1d889a0ae17',
                'x-api-key': 'a0f9a529-9af7-4e47-892b-326a099c34f0',
                'Content-Type': 'application/json',
            };

            const data = {
                accountNo: "4910205057729",
                accountName: "KHOA DAM",
                acqId: "970405",
                addInfo: `${dataQR.name} - ${dataQR.sdt}: Chuyển khoản cho máy bay của Khoa Đàm`,
                amount: `${dataQR.price}`,
                template: "compact"
            };

            try {
                const response = await axios.post(url, data, { headers });
                console.log(response.data);
                setQrCodeUrl(response.data); // Giả sử response.data chứa URL QR code
                console.log(qrCodeUrl.data.qrDataURL);
            } catch (err) {
                console.error('Error calling API:', err);
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
                            <ul className="text-sm text-gray-600 mb-4 list-disc list-inside space-y-1">
                                <li>Quét mã QR để thanh toán</li>
                            </ul>
                            <div className="flex justify-center"

                            >
                                <img src={qrCodeUrl.data.qrDataURL} alt="QRcode" className="h-80" />
                            </div>
                        </div>
                    )}
                </div>
            ))}

        </div>
    );
};

export default PaymentMethodList;