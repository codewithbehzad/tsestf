import React from "react";
// assets
import arrow from "../assets/images/arrow.jpg";
import hero from "../assets/images/hero.jpg";

const HeroSection = () => {
  return (
    <section className="md:mt-12 md:mb-20 mb-16 flex flex-col md:flex-row">
      {/* <!-- slogan section --> */}
      <div className="md:w-2/4 w-full flex flex-col md:flex-col text-center md:text-right justify-center gap-7">
        <div className="text-center md:text-right w-fit flex flex-col mx-auto">
          <h1 className="font-extrabold text-sloganPrimary mb-2 md:mb-6 sm:text-[30px] md:text-[38px] md:flex-nowrap lg:text-[50px] leading-snug">
            با کمتر از یک میلیون
            <br />
            هم می شود طلا خرید
          </h1>
          <p className="text-gray-400 mb-2 text-[12px] font-medium sm:text-[14px] md:text-[16px] md:flex-nowrap">
            انواع طلا کم اجرت و سکه مخصوصا
            <span className="text-yellow-400">پارسیان</span> رو
            <br />
            همین الان ازینجا میتونی سفارش بدی :)
          </p>
          {/* <!-- underline --> */}
          <div className="max-w-screen-sm h-0.5 bg-[#BEC1F333] mb-4 md:mt-2 md:mb-5"></div>

          <div className="md:flex h-16 flex md:flex-row flex-col items-center justify-between md:justify-normal gap-4 md:mb-6 md:gap-6">
            <p className="font-medium text-center text-sloganPrimary block text-[12px] md:text-lg md:text-right">
              میخوای بببینی؟
            </p>

            <a href="#products" className="relative inline-block text-lg group">
              <span className="relative z-10 block px-5 py-2 sm:py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-yellow-600 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-yellow-500 group-hover:-rotate-180 ease"></span>
                <span className="relative md:text-[18px] sm:text-base text-[14px]">
                  بزن رو دکمه
                </span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-6 sm:h-12 sm:-mb-1 -mb-0.5 -mr-0 sm:-mr-1 transition-all duration-200 ease-linear bg-yellow-500 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </a>
          </div>

          {/* <!-- arrow come down --> */}
          <div className="md:flex w-5/6 hidden justify-end">
            <img className="opacity-30" src={arrow} alt="Arrow" />
          </div>
        </div>
      </div>
      {/* <!-- trader-bg section --> */}
      <div className="md:w-[50%] w-[90%] order-first md:order-1 mx-auto">
        <img src={hero} alt="Trader" />
      </div>
    </section>
  );
};

export default HeroSection;
