/* eslint-disable react/prop-types */
import React from "react";

// assets
import arrowdown from "../../assets/images/arrow-down.png";

const Price = ({ priceData }) => {
  return (
    <section
      id="pricing"
      className="w-full transition-all mb-5 ease-out duration-1000 pb-6 md:pb-10 rounded-md md:pt-5 -z-20 md:mt-16 mt-2 flex md:flex-row flex-col"
    >
      {/* <!-- #heading --> */}
      <div className="md:w-1/4 w-full flex md:flex-col flex-row p-6 md:p-10 justify-center md:gap-y-5 gap-x-5 items-center">
        <div className="flex flex-row md:flex-col items-center">
          <h2 className="md:text-[64px] text-[48px] order-1 text-sloganPrimary font-extrabold">
            تابلو
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#2A2D53"
            className="w-8 h-10 animate-pulse md:w-full -rotate-90 md:rotate-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
        </div>
        <div className="mt-10 md:mt-0 text-[12px] sm:text-[14px]">
          قیمت ها
          <span className="font-bold animate-pulse text-red-600">به روز </span>
          <br />و برحسب
          <span className="font-bold animate-pulse text-red-600">تومان</span>
          می باشد
        </div>
      </div>
      {/* <!-- #table --> */}
      <div className="relative p-2 w-full">
        <table className="leading-normal shadow-xl w-3/4 md:w-4/6 mx-auto">
          <thead>
            <tr className="border-b-2 px-6 py-1 bg-gray-800 rounded-t-md flex w-full items-center justify-between">
              <th className="py-2 sm:text-[22px] border-gray-200 text-[16px] font-extrabold text-white">
                <span className="">طلا</span>
              </th>
              <th className="sm:text-[20px] border-gray-200 text-[10px] font-extrabold text-white">
                <span className="text-yellow-400">14:39</span>
                <br />
                <span className="text-yellow-400">1402/06/11</span>
              </th>
              <th className="py-2 sm:text-[22px] border-gray-200 text-[16px] font-extrabold text-white">
                قیمت
              </th>
            </tr>
          </thead>
          <tbody className="w-full">
            {/* <!-- item #1 --> */}
            <tr className="flex w-full bg-white items-center border-b-2 justify-between">
              {/* <!-- table items row title --> */}
              <td className="px-2 md:px-5 sm:py-3 py-1.5 text-sm w-full">
                <div className="flex items-center">
                  <p className="text-gray-900 text-[14px] sm:text-[16px] md:text-[18px]">
                    طلای 18 عیار
                  </p>
                </div>
              </td>
              {/* <!-- table row price --> */}
              <td className="px-2 md:px-5 py-1.5 sm:py-3 border-gray-200 bg-white text-sm">
                <div className="flex flex-row-reverse items-center gap-1">
                  <span className="relative inline-block px-3 py-1 text-center font-semibold text-red-900 leading-tight">
                    <span
                      aria-hidden
                      className="absolute bg-center inset-0 bg-red-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative font-medium text-[12px] sm:text-[16px] md:text-[18px]">
                      12,500,000
                    </span>
                  </span>
                  <span className="relative inline-block text-center font-semibold text-red-900 leading-tight">
                    <span className="relative font-medium text-[10px] sm:text-[12px] md:text-[14px]">
                      (0.01%)
                    </span>
                  </span>
                </div>
              </td>
            </tr>
            {/* <!-- item #2 --> */}
            <tr className="flex w-full bg-white items-center border-b-2 justify-between">
              {/* <!-- table items row title --> */}
              <td className="px-2 md:px-5 sm:py-3 py-1.5 text-sm w-full">
                <div className="flex items-center">
                  <p className="text-gray-900 text-[14px] sm:text-[16px] md:text-[18px]">
                    طلای 24 عیار
                  </p>
                </div>
              </td>
              {/* <!-- table row price --> */}
              <td className="px-2 md:px-5 sm:py-3 py-1.5 border-gray-200 bg-white text-sm">
                <div className="flex flex-row-reverse items-center gap-1">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative font-medium text-[12px] sm:text-[16px] md:text-[18px]">
                      12,500,000
                    </span>
                  </span>
                  <span className="relative inline-block text-center font-semibold text-green-900 leading-tight">
                    <span className="relative font-medium text-[10px] sm:text-[12px] md:text-[14px]">
                      (0.01%)
                    </span>
                  </span>
                </div>
              </td>
            </tr>
            {/* <!-- item #3 --> */}
            <tr className="flex w-full bg-white items-center border-b-2 justify-between">
              {/* <!-- table items row title --> */}
              <td className="px-2 md:px-5 sm:py-3 py-1.5 text-sm w-full">
                <div className="flex items-center">
                  <p className="text-gray-900 text-[14px] sm:text-[16px] md:text-[18px]">
                    سکه جدید
                  </p>
                </div>
              </td>
              {/* <!-- table row price --> */}
              <td className="px-2 md:px-5 sm:py-3 py-1.5 border-gray-200 bg-white text-sm">
                <div className="flex flex-row-reverse items-center gap-1">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative font-medium text-[12px] sm:text-[16px] md:text-[18px]">
                      12,500,000
                    </span>
                  </span>
                  <span className="relative inline-block text-center font-semibold text-green-900 leading-tight">
                    <span className="relative font-medium text-[10px] sm:text-[12px] md:text-[14px]">
                      (0.01%)
                    </span>
                  </span>
                </div>
              </td>
            </tr>
            {/* <!-- item #4 --> */}
            <tr className="flex w-full bg-white items-center border-b-2 justify-between">
              {/* <!-- table items row title --> */}
              <td className="px-2 md:px-5 sm:py-3 py-1.5 text-sm w-full">
                <div className="flex items-center">
                  <p className="text-gray-900 text-[14px] sm:text-[16px] md:text-[18px]">
                    سکه قدیم
                  </p>
                </div>
              </td>
              {/* <!-- table row price --> */}
              <td className="px-2 md:px-5 sm:py-3 py-1.5 border-gray-200 bg-white text-sm">
                <div className="flex flex-row-reverse items-center gap-1">
                  <span className="relative inline-block px-3 py-1 text-center font-semibold text-red-900 leading-tight">
                    <span
                      aria-hidden
                      className="absolute bg-center inset-0 bg-red-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative font-medium text-[12px] sm:text-[16px] md:text-[18px]">
                      12,500,000
                    </span>
                  </span>
                  <span className="relative inline-block text-center font-semibold text-red-900 leading-tight">
                    <span className="relative font-medium text-[10px] sm:text-[12px] md:text-[14px]">
                      (0.01%)
                    </span>
                  </span>
                </div>
              </td>
            </tr>
            {/* <!-- item #5 --> */}
            <tr className="flex w-full bg-white items-center border-b-2 justify-between">
              {/* <!-- table items row title --> */}
              <td className="px-2 md:px-5 sm:py-3 py-1.5 text-sm w-full">
                <div className="flex items-center">
                  <p className="text-gray-900 text-[14px] sm:text-[16px] md:text-[18px]">
                    نیم سکه
                  </p>
                </div>
              </td>
              {/* <!-- table row price --> */}
              <td className="px-2 md:px-5 sm:py-3 py-1.5 border-gray-200 bg-white text-sm">
                <div className="flex flex-row-reverse items-center gap-1">
                  <span className="relative inline-block px-3 py-1 text-center font-semibold text-red-900 leading-tight">
                    <span
                      aria-hidden
                      className="absolute bg-center inset-0 bg-red-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative font-medium text-[12px] sm:text-[16px] md:text-[18px]">
                      12,500,000
                    </span>
                  </span>
                  <span className="relative inline-block text-center font-semibold text-red-900 leading-tight">
                    <span className="relative font-medium text-[10px] sm:text-[12px] md:text-[14px]">
                      (0.01%)
                    </span>
                  </span>
                </div>
              </td>
            </tr>
            {/* <!-- item #6 --> */}
            <tr className="flex w-full bg-white items-center border-b-2 justify-between">
              {/* <!-- table items row title --> */}
              <td className="px-2 md:px-5 sm:py-3 py-1.5 text-sm w-full">
                <div className="flex items-center">
                  <p className="text-gray-900 text-[14px] sm:text-[16px] md:text-[18px]">
                    ربع سکه
                  </p>
                </div>
              </td>
              {/* <!-- table row price --> */}
              <td className="px-2 md:px-5 sm:py-3 py-1.5 border-gray-200 bg-white text-sm">
                <div className="flex flex-row-reverse items-center gap-1">
                  <span className="relative inline-block px-3 py-1 text-center font-semibold text-red-900 leading-tight">
                    <span
                      aria-hidden
                      className="absolute bg-center inset-0 bg-red-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative font-medium text-[12px] sm:text-[16px] md:text-[18px]">
                      12,500,000
                    </span>
                  </span>
                  <span className="relative inline-block text-center font-semibold text-red-900 leading-tight">
                    <span className="relative font-medium text-[10px] sm:text-[12px] md:text-[14px]">
                      (0.01%)
                    </span>
                  </span>
                </div>
              </td>
            </tr>
            {/* <!-- item #7 --> */}
            <tr className="flex w-full bg-white items-center justify-between">
              {/* <!-- table items row title --> */}
              <td className="px-2 md:px-5 sm:py-3 py-1.5 text-sm w-full">
                <div className="flex items-center">
                  <p className="text-gray-900 text-[14px] sm:text-[16px] md:text-[18px]">
                    سکه گرمی
                  </p>
                </div>
              </td>
              {/* <!-- table row price --> */}
              <td className="px-2 md:px-5 sm:py-3 py-1.5 border-gray-200 bg-white text-sm">
                <div className="flex flex-row-reverse items-center gap-1">
                  <span className="relative inline-block px-3 py-1 text-center font-semibold text-red-900 leading-tight">
                    <span
                      aria-hidden
                      className="absolute bg-center inset-0 bg-red-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative font-medium text-[12px] sm:text-[16px] md:text-[18px]">
                      12,500,000
                    </span>
                  </span>
                  <span className="relative inline-block text-center font-semibold text-red-900 leading-tight">
                    <span className="relative font-medium text-[10px] sm:text-[12px] md:text-[14px]">
                      (0.01%)
                    </span>
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <!-- table copy right --> */}
      <div className="mt-5 sm:hidden">
        <p className="text-gray-500 text-center text-[14px]">
          © تمامی حقوق برای <span className="font-bold">Nanakar</span>
          <span className="text-yellow-400 font-bold">Gold</span>
          محفوظ است
        </p>
      </div>
      {/* <!-- table arrow down --> */}
      <div className="flex animate-pulse mb-10 sm:mb-8 md:hidden w-full items-center justify-center mt-5 sm:mt-10">
        <img className="w-8 opacity-50" src={arrowdown} alt="Arrow Down" />
      </div>
    </section>
  );
};

export default Price;
