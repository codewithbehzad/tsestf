import React, { useContext } from "react";

//assets
import { Link } from "react-router-dom";
import abshodeh from "../assets/images/abshode (2).jpg";
import sekkeh from "../assets/images/parsian.jpg";
import shemsh from "../assets/images/shemsh.jpg";
import zinati from "../assets/images/zinati.jpg";

import { ProductContext } from "../context/ProductContextProvider";
import ProductSlider from "./ProductSlider";

const HomeProducts = () => {
  const product = useContext(ProductContext);
  // sekkeh
  const filterSekkeh = product.filter((item) => item.slug === "Sekkeh");
  const sekkehCount = filterSekkeh.length;

  // shemsh-gold
  const filterShemsh = product.filter((item) => item.slug === "shemsh-gold");
  const shemshCount = filterShemsh.length;

  // Zinati
  const filterZinati = product.filter((item) => item.slug === "Zinati");
  const zinatiCount = filterZinati.length;

  // abshodeh

  const filterAbshodeh = product.filter((item) => item.slug === "abshodeh");
  const abshodehCount = filterAbshodeh.length;
  return (
    // <!-- #products -->
    <section
      id="products"
      className="w-full h-full md:mb-16 pb-8 pt-2 md:pt-8 mb-12 gap-8 items-center flex flex-col mx-auto"
    >
      {/* <!-- title --> */}
      <div className="flex gap-2 mb-8 flex-col items-center justify-center md:gap-8">
        <div className="flex w-full mt-10 items-center justify-center gap-2 md:gap-4 pt-6 mx-auto">
          <span className="text-xl md:text-[42px] font-extrabold text-sloganPrimary">
            خرید بر اساس دسته بندی
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#2A2D53"
            className="w-5 h-5 -z-10 animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <div className="w-full text-center px-8 md:px-0 sm:w-1/2 text-navlinks md:text-base text-sm">
          <p>
            در این سایت انواع طلا مانند سکه، آبشده، طلاهای زینتی و... را بر اساس
            موجودی و دسته بندی زیر سفارش دهید
          </p>
        </div>
      </div>
      {/* <!-- products categories --> */}
      <div className="w-full flex flex-col gap-10 items-center justify-center">
        {/* <!-- category --> */}
        <div className="flex gap-10 md:gap-x-16 mx-auto flex-wrap px-2 sm:px-4 md:px-6 sm:flex-row flex-col items-center justify-center text-center">
          {/* <!-- zinati --> */}
          <Link to="/products">
            <div className="w-48 cursor-pointer flex flex-col gap-2">
              <img
                className="rounded-md hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] h-48 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
                src={zinati}
                alt="gold"
              />
              <div className="flex flex-col ">
                <p className="font-bold hover:text-yellow-500 text-sloganPrimary">
                  طلای زینتی
                </p>
                <p className="text-navlinks md:text-sm ">
                  <span>{zinatiCount}</span> محصول موجود
                </p>
              </div>
            </div>
          </Link>
          {/* <!-- shemsh --> */}
          <Link to="/products">
            <div className="cursor-pointer w-48 flex flex-col gap-2">
              <img
                className="rounded-md hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] h-48 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
                src={shemsh}
                alt="gold"
              />
              <div className="flex flex-col">
                <p className="font-bold hover:text-yellow-500 text-sloganPrimary">
                  شمش طلا
                </p>
                <p className="text-navlinks md:text-sm">
                  <span>{shemshCount}</span> محصول موجود
                </p>
              </div>
            </div>
          </Link>
          {/* <!-- sekkeh --> */}
          <Link to="/products">
            <div className="cursor-pointer w-48 flex flex-col gap-2">
              <img
                className="rounded-md hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] h-48 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
                src={sekkeh}
                alt="gold"
              />
              <div className="flex flex-col">
                <p className="font-bold hover:text-yellow-500 text-sloganPrimary">
                  سکه طلا
                </p>
                <p className="text-navlinks md:text-sm">
                  <span>{sekkehCount}</span> محصول موجود
                </p>
              </div>
            </div>
          </Link>
          {/* <!-- abshodeh --> */}
          <Link to="/products">
            <div className="cursor-pointer w-48 flex flex-col gap-2">
              <img
                className="rounded-md hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] h-48 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
                src={abshodeh}
                alt="gold"
              />
              <div className="flex flex-col">
                <p className="font-bold hover:text-yellow-500  text-sloganPrimary">
                  طلای آبشده
                </p>
                <p className="text-navlinks md:text-sm">
                  <span>{abshodehCount}</span> محصول موجود
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-10 mt-20 ">
          <h5 className="text-xl text-center md:text-[42px]  font-extrabold text-sloganPrimary">
            جدیدترین محصولات
          </h5>
          <ProductSlider />
        </div>
        {/* <!-- explore btn --> */}
        <div>
          <Link
            to="products"
            className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
          >
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                className="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              مشاهده تمامی محصولات
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
