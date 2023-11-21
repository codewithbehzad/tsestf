import axios from "axios";
import React, { useEffect, useState } from "react";

// assets
import arrowdown from "../assets/images/arrow-down.png";

// separate
import { separate } from "./shared/SepratePrice";

const Table = () => {
  const [data, setData] = useState([]);
  const [date, setDate] = useState([]);

  useEffect(() => {
    const fetchPrice = async () => {
      const gold = await axios
        .get("https://api.nanakargold.ir/tablo/")
        .then((res) => res.data[0].gold);
      return setData(await gold);
    };
    fetchPrice();

    const fetchDate = async () => {
      const date = await axios
        .get("https://api.nanakargold.ir/tablo/")
        .then((res) => res.data[1].datetime);
      return setDate(await date);
    };
    fetchDate();
  }, []);

  return (
    <section
      id="pricing"
      className="w-full transition-all mb-6 sm:mb-10 md:mb-14 ease-out duration-1000 pb-6 md:pb-10 rounded-md md:pt-5 -z-20 md:mt-16 mt-2 flex md:flex-row flex-col"
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
          <span className="font-bold animate-pulse text-red-600 ">
            {" "}
            به روز{" "}
          </span>
          <br /> و برحسب
          <span className="font-bold animate-pulse text-red-600 "> تومان </span>
          می باشد{" "}
        </div>
      </div>
      <div className="relative p-2 px-10 sm:px-12 md:px-0 w-full ">
        <table className="leading-normal shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-full md:w-4/6 mx-auto">
          <thead>
            <tr className="border-b-2 px-6 py-1 bg-gray-800 rounded-t-md flex w-full items-center justify-between">
              <th className="sm:py-3 py-1 sm:text-[22px] border-gray-200 text-[16px] font-extrabold text-white">
                <span className="">طلا</span>
              </th>
              <th className="sm:text-[20px] flex flex-col border-gray-200 text-[12px] pt-1 font-extrabold text-white">
                {date.map((item, index) => {
                  return (
                    <span key={index}>
                      <p className="text-yellow-400">{item.d}</p>
                      <p className="text-yellow-400">{item.t}</p>
                    </span>
                  );
                })}
              </th>
              <th className="sm:py-3 py-1.5 sm:text-[22px] border-gray-200 text-[16px] font-extrabold text-white">
                قیمت
              </th>
            </tr>
          </thead>
          <tbody className="w-full">
            {/* <!-- item #1 --> */}

            {data.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="flex w-full bg-white items-center border-b-2 justify-between"
                >
                  {/* <!-- table items row title --> */}
                  <td className="px-2 md:px-5 py-2  text-sm w-full">
                    <div className="flex md:py-2 py-1.5 items-center">
                      <p className="text-gray-900 text-[14px] sm:text-[16px] md:text-[18px]">
                        {item.name}
                      </p>
                    </div>
                  </td>
                  {/* <!-- table row price --> */}
                  <td className="px-2 md:px-5 py-1.5 sm:py-3 border-gray-200 bg-white text-sm">
                    <div className="flex flex-row-reverse items-center gap-1">
                      <span
                        className={
                          item.status_color === "text-green-900"
                            ? "relative inline-block px-3 py-1 text-center font-semibold text-green-900 leading-tight"
                            : "relative inline-block px-3 py-1 text-center font-semibold text-red-900 leading-tight"
                        }
                      >
                        <span
                          aria-hidden
                          className={
                            item.status_color === "text-green-900"
                              ? "absolute bg-center inset-0 bg-green-200 opacity-50 rounded-full"
                              : "absolute bg-center inset-0 bg-red-200 opacity-50 rounded-full"
                          }
                        ></span>
                        <span className="relative font-medium text-[12px] sm:text-[16px] md:text-[18px]">
                          {separate(item.price)}
                        </span>
                      </span>
                      <span className="relative inline-block text-center font-semibold text-red-900 leading-tight">
                        <span className="relative font-medium text-[10px] sm:text-[12px] md:text-[14px]">
                          {item.status_color === "text-red-900" ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5 text-red-900"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5 text-green-600"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                              />
                            </svg>
                          )}
                        </span>
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* <!-- table copy right --> */}
      <div className="mt-5 sm:hidden">
        <p className="text-gray-500 text-center text-[14px]">
          © تمامی حقوق برای <span className="font-bold">Nanakar</span>
          <span className="text-yellow-400 font-bold">Gold</span> محفوظ است
        </p>
      </div>
      {/* <!-- table arrow down --> */}
      <div className="flex animate-pulse mb-10 sm:mb-8 md:hidden w-full items-center justify-center mt-5 sm:mt-10">
        <img className="w-8 opacity-50" src={arrowdown} alt="Arrow Down" />
      </div>
    </section>
  );
};

export default Table;
