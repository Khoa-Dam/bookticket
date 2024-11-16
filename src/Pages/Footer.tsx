import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaTelegram } from 'react-icons/fa';
import airplane from '../../assets/logo.png';
import googlePlay from '../../assets/google.svg';
import appStore from '../../assets/appStore.svg';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#183244] text-white py-12">
            <div className="container mx-auto px-4">
                {/* Logo and Certifications */}
                <div className="mb-8">
                    <div className="mb-4">
                        <img
                            src={airplane}
                            alt="Airplane"
                            className="h-10 mb-4"
                        />
                    </div>
                </div>

                {/* Navigation Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* About Traveloka */}
                    <div>
                        <h3 className="font-semibold mb-4 text-lg">Về chúng tôi</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-300">Cách đặt chỗ</a></li>
                            <li><a href="#" className="hover:text-gray-300">Liên hệ chúng tôi</a></li>
                            <li><a href="#" className="hover:text-gray-300">Trợ giúp</a></li>
                            <li><a href="#" className="hover:text-gray-300">Tuyển dụng</a></li>
                            <li><a href="#" className="hover:text-gray-300">Về chúng tôi</a></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="font-semibold mb-4 text-lg">Sản phẩm</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-300">Khách sạn</a></li>
                            <li><a href="#" className="hover:text-gray-300">Vé máy bay</a></li>
                            <li><a href="#" className="hover:text-gray-300">Vé xe khách</a></li>
                            <li><a href="#" className="hover:text-gray-300">Đưa đón sân bay</a></li>
                            <li><a href="#" className="hover:text-gray-300">Cho thuê xe</a></li>
                        </ul>
                    </div>

                    {/* Others */}
                    <div>
                        <h3 className="font-semibold mb-4 text-lg">Khác</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-300">Affiliate</a></li>
                            <li><a href="#" className="hover:text-gray-300">Blog</a></li>
                            <li><a href="#" className="hover:text-gray-300">Chính Sách Quyền Riêng</a></li>
                            <li><a href="#" className="hover:text-gray-300">Điều khoản & Điều kiện</a></li>
                            <li><a href="#" className="hover:text-gray-300">Quy chế hoạt động</a></li>
                        </ul>
                    </div>

                    {/* Social Media and App Downloads */}
                    <div>
                        <h3 className="font-semibold mb-4 text-lg">Theo dõi chúng tôi trên</h3>
                        <div className="flex space-x-4 mb-6">
                            <a href="#" className="hover:text-gray-300">
                                <FaFacebookF className="w-6 h-6" />
                            </a>
                            <a href="#" className="hover:text-gray-300">
                                <FaInstagram className="w-6 h-6" />
                            </a>
                            <a href="#" className="hover:text-gray-300">
                                <FaYoutube className="w-6 h-6" />
                            </a>
                            <a href="#" className="hover:text-gray-300">
                                <FaTiktok className="w-6 h-6" />
                            </a>
                            <a href="#" className="hover:text-gray-300">
                                <FaTelegram className="w-6 h-6" />
                            </a>
                        </div>

                        <h3 className="font-semibold mb-4 text-lg">Tải ứng dụng</h3>
                        <div className="space-y-2">
                            <a href="#" className="block">
                                <img
                                    src={googlePlay}
                                    alt="Get it on Google Play"
                                    className="h-10 rounded"
                                />
                            </a>
                            <a href="#" className="block">
                                <img
                                    src={appStore}
                                    alt="Download on the App Store"
                                    className="h-10 rounded"
                                />
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default Footer;