import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiAirplaneLight } from "react-icons/pi";
import { MdAccountCircle, MdMenu, MdClose } from "react-icons/md";

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="relative bg-gray-100 border-b-2 border-[#1c89e3]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link
            className="flex items-center text-sm font-bold uppercase text-[#1c89e3]"
            to="/"
          >
            <PiAirplaneLight className="mr-2 h-7 w-7" />
            <span className="font-serif">AirFlight</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-4">
            <Link
              className="px-3 py-2 text-xs font-bold uppercase leading-snug text-[#1c89e3] hover:opacity-75 border-2 rounded-md border-blue-200"
              to="/Support"
            >
              Hỗ trợ
            </Link>
            <Link
              className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-[#1c89e3] hover:opacity-75 border-2 rounded-md border-blue-200"
              to="/SignUp"
            >
              <MdAccountCircle className="mr-2" />
              Đăng kí
            </Link>
            <Link
              className="px-3 py-2 text-xs font-bold uppercase leading-snug text-[#1c89e3] hover:opacity-75"
              to="/SignIn"
            >
              Đăng nhập
            </Link>
          </div>

          <button
            className="lg:hidden text-[#1c89e3] focus:outline-none"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? (
              <MdClose className="h-6 w-6" />
            ) : (
              <MdMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden ${navbarOpen ? "block" : "hidden"
            } pb-4`}
        >
          <div className="flex flex-col space-y-2">
            <Link
              className="px-3 py-2 text-xs font-bold uppercase text-[#1c89e3] hover:opacity-75 border-2 rounded-md border-blue-200"
              to="/Support"
            >
              Hỗ trợ
            </Link>
            <Link
              className="flex items-center px-3 py-2 text-xs font-bold uppercase text-[#1c89e3] hover:opacity-75 border-2 rounded-md border-blue-200"
              to="/SignUp"
            >
              <MdAccountCircle className="mr-2" />
              Đăng kí
            </Link>
            <Link
              className="px-3 py-2 text-xs font-bold uppercase text-[#1c89e3] hover:opacity-75"
              to="/SignIn"
            >
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;