import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

// react icons
import {
  EnvelopeIcon,
  HomeIcon,
  PresentationChartBarIcon,
  ShoppingBagIcon,
  XMarkIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

// assets
import laklak from "../assets/images/laklak.jpg";
import mainLogo from "../assets/images/mainlogo.png";

// Context
import { CartContext } from "../context/CartContextProvider";

const Navbar = () => {
  // Context
  const { state } = useContext(CartContext);

  let Navlinks = [
    // { name: "خانه", link: "/" },
    {
      name: "تابلو",
      link: "/",
      icon: <PresentationChartBarIcon className="w-5" />,
    },
    {
      name: "محصولات",
      link: "/products",
      icon: <ShoppingBagIcon className="w-5" />,
    },

    {
      name: "رهگیری سفارش",
      link: "https://tracking.post.ir",
      icon: <EnvelopeIcon className="w-5" />,
    },
    {
      name: "ارتباط با ما",
      icon: <ChatBubbleLeftRightIcon className="w-5" />,
    },
  ];

  let [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 w-full z-50 transiton-all duration-100 ease-out backdrop-blur-2xl blur-0 shadow-sm opacity-100 py-1 md:px-2 md:py-0">
      <nav className="flex md:justify-between p-1 md:items-center md:max-w-7xl md:mx-auto items-center justify-between">
        {/* <!-- menu --> */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          id="menu"
          className="md:hidden flex gap-2 transition-all duration-600 ease-in-out"
        >
          {isOpen ? (
            <XMarkIcon strokeWidth={1.5} className="w-8 h-8 text-navlinks" />
          ) : (
            <HiOutlineMenuAlt3
              strokeWidth={1.5}
              className="w-8 h-8 text-navlinks"
            />
          )}

          {/* <!-- lak lak --> */}
          <img className="md:w-[30px] w-6" src={laklak} alt="Image" />
        </div>

        {/* <!-- link items --> */}
        <div
          id="sidebar"
          className={`md:flex pr-2 md:pr-0 md:top-0 md:items-center md:pb-0 pb-6 absolute md:z-auto md:relative z-[-1] right-0  transition-all duration-300 bg-slate-900 md:bg-transparent md:w-auto w-full ease-in ${
            isOpen ? "top-12" : "top-[-490px]"
          }`}
        >
          {/* <!-- links --> */}
          <div className="w-full md:w-auto whitespace-nowrap">
            <ul className="w-full md:text-navlinks text-slate-50 items-center justify-around flex-col md:gap-x-6 md:mt-0 py-4 px-5 md:p-0 md:flex-row md:flex text-right">
              <li
                onClick={() => setIsOpen(!isOpen)}
                className="mr-3 md:mr-0 md:hidden"
              >
                <a className="hover:cursor-pointer sm:text-base text-sm w-full hover:text-yellow-500 flex gap-[6px] py-4">
                  <HomeIcon className="w-5" />
                  خانه
                </a>
              </li>
              {Navlinks.map((link, index) => (
                <li
                  key={index}
                  onClick={() => setIsOpen(!isOpen)}
                  className="mr-3 md:mr-0"
                >
                  <Link
                    to={link.link}
                    className="hover:cursor-pointer sm:text-base text-sm w-full hover:text-yellow-500 flex gap-[6px] py-4"
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* <!-- logo --> */}
        <div className="text-left flex items-center cursor-pointer justify-end md:w-16 md:order-first order-last">
          <Link to="https://nanakargold.ir/">
            <img className="w-12 md:w-16" src={mainLogo} alt="Logo" />
          </Link>
        </div>
        {/* <!-- desktop Brand name --> */}
        <div className="md:flex items-center md:gap-x-3 lg:gap-x-6 whitespace-nowrap font-sans text-left ml-2 flex justify-end font-bold w-3/4 md:w-auto relative">
          {/* Shoppin cart */}
          <div className="flex relative items-center justify-between">
            <Link className="relative" to="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-navlinks"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </Link>
            {/* cart Badge */}
            <span className="rounded-full bg-yellow-500 text-center py-0.5 px-2 text-white flex items-center justify-center text-sm absolute -top-2 -right-4">
              <span>{state.itemsCounter}</span>
            </span>
          </div>
          {/* <!-- logo title --> */}
          <a to="https://nanakargold.ir/" className="hidden md:flex">
            <p className="font-bold font-sans md:text-xl lg:text-2xl">
              Nanakar <span className="text-yellow-500">gold</span>
            </p>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
