
export type PaymentMethod = 'digital-wallet' | 'card' | 'store' | 'vietqr' | 'bank-transfer' | 'atm' | 'installment'

export const paymentMethodList = [
    { id: 'vietqr', label: 'VietQR', status: 'Ưu đãi giảm giá', icons: ['/placeholder.svg?height=24&width=40'] },
    { id: 'store', label: 'Tại cửa hàng', status: '', icons: ['/placeholder.svg?height=24&width=40', '/placeholder.svg?height=24&width=40', '/placeholder.svg?height=24&width=40', '/placeholder.svg?height=24&width=40'] },
    { id: 'bank-transfer', label: 'Chuyển khoản ngân hàng', status: 'Chỉ có vào 08:00 - 20:00', icons: ['/placeholder.svg?height=24&width=40', '/placeholder.svg?height=24&width=40'] },
    { id: 'atm', label: 'ATM Cards/Mobile Banking', status: 'Đang bảo trì hệ thống', icons: ['/placeholder.svg?height=24&width=40', '/placeholder.svg?height=24&width=40'] },
    { id: 'installment', label: 'Trả góp thẻ tín dụng', status: 'Dưới mức tối thiểu', icons: ['/placeholder.svg?height=24&width=40'] },
];