import React from 'react';
import { PaymentMethod } from '../../Pages/Payment/PaymentMethod';
import Payment from '../../assets/Payment.png';
interface DigitalWalletPaymentProps {
    selectedMethod: PaymentMethod;
    setSelectedMethod: (method: PaymentMethod) => void;
}

const DigitalWalletPayment: React.FC<DigitalWalletPaymentProps> = ({ selectedMethod, setSelectedMethod }) => {
    return (
        <div>
            <label className="flex items-center space-x-2 cursor-pointer">
                <input
                    type="radio"
                    className="form-radio text-blue-600"
                    checked={selectedMethod === 'digital-wallet'}
                    onChange={() => setSelectedMethod('digital-wallet')}
                />
                <span>Ví điện tử khác</span>
                <span className="ml-2 px-2 py-0.5 text-xs bg-green-100 text-green-800 rounded-full">New!</span>
            </label>

            {selectedMethod === 'digital-wallet' && (
                <div className="mt-3 ml-6 p-4 bg-blue-50 rounded-lg">
                    <ul className="text-sm text-gray-600 mb-4 list-disc list-inside space-y-1">
                        <li>Thanh toán chỉ có sẵn trên ứng dụng được liệt kê bên dưới. Đảm bảo bạn đã cài đặt ứng dụng ví điện tử của mình trước khi tiếp tục.</li>
                        <li>Sau khi nhấp vào nút 'Thanh toán', bạn sẽ được chuyển hướng đến chọn ví điện tử của mình để xem Mã QR.</li>
                        <li>Các tùy chọn có sẵn: ShopeePay, ZaloPay, SmartPay và mPAY.</li>
                    </ul>
                    <div className="flex justify-center">
                        <img src={Payment} alt="Payment" className="h-10" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default DigitalWalletPayment;