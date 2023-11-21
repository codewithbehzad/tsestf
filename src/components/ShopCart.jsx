/* eslint-disable react/no-unknown-property */
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Components
import Cart from "./shared/Cart";
import { separate } from "./shared/SepratePrice";

// Context
import { CartContext } from "../context/CartContextProvider";

// api post price
import { getPostPrice } from "../services/api";

function ShopCart() {
  const [postPrice, setPostPrice] = useState();

  const { state, dispatch } = useContext(CartContext);

  useEffect(() => {
    const fetchAPI = async () => {
      setPostPrice(await getPostPrice());
    };

    fetchAPI().post_price;
  }, [postPrice]);

  return (
    <div className="w-full relative md:p-0 flex items-center justify-center">
      <div className=" container mx-auto mt-0 sm:mt-10">
        <div className="flex flex-col-reverse md:flex-row md:items-start items-center  justify-center my-0 sm:my-10 gap-x-0 md:gap-x-10">
          {/* order summary */}
          <div
            id="summary"
            className="md:w-1/4 w-5/6 mb-14 h-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]  bg-gray-100 px-8 mt-10 md:mt-0 py-10"
          >
            <h1 className="font-semibold text-xl md:text-2xl border-b pb-8">
              خلاصه سفارشات
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm">تعداد</span>
              <span className="font-semibold text-sm">
                {state.itemsCounter}
                {/* {console.log(state)} */}
              </span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm">
                هزینه ارسال
              </label>
              <select className="block p-2 text-gray-600 rounded-md w-full text-sm">
                <option className="">پست پیشتاز - {postPrice} تومن</option>
              </select>
            </div>
            <div className="py-10">
              <label
                htmlFor="promo"
                className="font-semibold inline-block mb-3 text-sm rounded-md"
              >
                کد تخفیف
              </label>
              <input
                type="text"
                id="promo"
                placeholder="کد خود را وارد کنید"
                className="p-2 text-sm rounded-md w-full"
              />
            </div>
            <button className="bg-red-500 rounded-md hover:bg-red-600 px-5 py-2 text-sm text-white">
              اعمال کد
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm">
                <span>قیمت نهایی (تومان)</span>
                <span>
                  {separate(state.total ? state.total + postPrice : "")}
                </span>
              </div>
              <Link
                to="/form"
                className={`${
                  state.selectedItems.length === 0 ? "pointer-events-none" : ""
                }`}
              >
                <button
                  className={` ${
                    state.selectedItems.length === 0
                      ? "pointer-events-none bg-blue-500 rounded-md font-semibold hover:bg-blue-600 py-3 text-sm text-white w-full"
                      : "bg-blue-500 rounded-md font-semibold hover:bg-blue-600 py-3 text-sm text-white w-full"
                  }`}
                >
                  {/* go to form */}
                  مرحله بعدی
                </button>
              </Link>
            </div>
          </div>
          {/* order list */}
          <div className="relative shadow-md mx-auto sm:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] w-full sm:px-12 mb-5 md:w-3/4">
            <div className="w-full ">
              {state.quantity > 1 ? (
                ""
              ) : (
                <div className="w-full px-0 md:px-10 py-10 ">
                  <div className="flex justify-between items-center mx-6 border-b pb-8">
                    <h1 className="font-semibold text-xl md:text-2xl">
                      سبد خرید
                    </h1>
                    <h2 className="font-semibold text-xl md:text-2xl">
                      {state.itemsCounter}
                    </h2>
                  </div>
                  <div className="flex px-4 mt-10 mb-5">
                    <h3 className="font-semibold text-gray-600 text-xs w-2/5">
                      جزئیات محصول
                    </h3>
                    <h3 className="font-semibold  text-gray-600 text-xs w-1/5 text-center">
                      کد محصول
                    </h3>
                    <h3 className="font-semibold  text-gray-600 text-xs w-1/5 text-center">
                      قیمت (تومان)
                    </h3>
                    <h3 className="font-semibold  text-gray-600 text-xs w-1/6  sm:w-1/5 text-center">
                      تعداد
                    </h3>
                  </div>
                  {state.itemsCounter < 1 ? (
                    <p className="text-black text-sm md:text-base z-50 text-center mt-[30%] md:mt-[50%]">
                      سبد خرید خالی است !
                      <br />
                      <Link className="text-red-500" to="/products">
                        برو به صفحه محصولات
                      </Link>
                    </p>
                  ) : (
                    state.selectedItems.map((item) => (
                      <Cart key={item.id} data={item} />
                    ))
                  )}
                </div>
              )}
            </div>
            <div className="relative mt-20">
              <Link
                to="/products"
                className="flex items-center bottom-10 md:mt-0  absolute w-full flex-row justify-end sm:pl-2 pl-4 font-semibold text-indigo-600 text-sm"
              >
                اضافه کردن محصول جدید
                <svg
                  className="fill-current mr-2 rotate-180 text-indigo-600 w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCart;
