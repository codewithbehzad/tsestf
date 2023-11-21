import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { quantityCount } from "../helper/functions";

import { BiCartAdd } from "react-icons/bi";
import { IoCheckmarkDone } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

// functions
import { isInCart } from "../helper/functions";
import { separate } from "./shared/SepratePrice";

// assets
import { BiCategory } from "react-icons/bi";
import { GiWeightScale } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";

import { FaMinus } from "react-icons/fa6";

// Context
import { CartContext } from "../context/CartContextProvider";
import { ProductContext } from "../context/ProductContextProvider";

const ProductDetail = () => {
  const { state, dispatch } = useContext(CartContext);

  const [data, setData] = useState([]);
  const [productDetail, setProductDetail] = useState([]);
  const [galleries, setGalleries] = useState([]);
  const [cat, setCat] = useState([]);
  const [status, setStatus] = useState([]);
  const [quant, setQuant] = useState(0);
  const [activeImage, setActiveImage] = useState();
  const params = useParams();

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        `https://api.nanakargold.ir/products/${params.id}/`
      );
      const data = response.data;
      setProductDetail(data);
      setGalleries(data.galleries);
      setStatus(data.status);
      setActiveImage(data.image);
      setCat(data.sec_category[0].name);
    };

    const getData = async () => {
      const response = await axios.get("https://api.nanakargold.ir/products/");
      const data = response.data;
      return data;
    };

    getProducts();
  }, []);

  // console.log(params);
  return (
    <section className="py-10 mb-20 flex items-center w-full justify-center md:max-w-7xl bg-slate-50  p-10 rounded-lg ">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap mb-24">
          <div className="w-full md:w-3/5 px-4 mb-8 md:mb-0">
            <div className="sticky top-0 overflow-hidden flex flex-col items-center">
              <div className="relative mb-6 lg:mb-10 lg:h-96 ">
                <img
                  className="object-cover rounded-lg w-[256px] h-[256px] md:w-full lg:h-full"
                  src={activeImage}
                  alt="Image"
                />
              </div>
              <div className="flex-wrap -mx-2 flex">
                {galleries.map((item, index) => {
                  return (
                    <div key={index} className=" w-1/4 p-2 ">
                      <a className="block border border-gray-200 hover:border-blue-400 ">
                        <img
                          onClick={() => setActiveImage(item.img)}
                          className="object-fill w-24 h-20"
                          src={item.img}
                          alt="Product"
                        />
                      </a>
                    </div>
                  );
                })}
                <div className="flex items-center p-2 ">
                  <a className="block border border-gray-200 hover:border-blue-400 ">
                    <img
                      onClick={() => setActiveImage(productDetail.image)}
                      className="object-fill w-24 h-20"
                      src={productDetail.image}
                      alt="Product"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-6 items-center justify-center flex-col px-4 md:w-2/5">
            <div className="">
              <div className="mb-6 flex flex-col w-auto">
                <span className="px-2.5 py-0.5 rounded-md w-fit text-xs text-blue-600 bg-blue-100">
                  قیمت استثنائی
                </span>
                <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl ">
                  {productDetail.title}
                </h2>
                <p>
                  <span className="text-gray-700">بازدید : </span>
                  <span className="px-2.5 py-0.5 rounded-md text-xs text-blue-600 bg-blue-100">
                    {productDetail.visit_count}
                  </span>
                </p>

                <p className="inline-block mt-6 text-2xl font-semibold text-gray-700  ">
                  <span className="text-red-600">
                    {separate(productDetail.live_price)}
                  </span>{" "}
                  <span
                    className={
                      productDetail.live_price == "با پشتیبانی تماس بگیرید"
                        ? "hidden"
                        : ""
                    }
                  >
                    تومان
                  </span>
                </p>
              </div>
              <div className="mb-6">
                <h2 className="mb-2 text-lg font-bold text-gray-700 ">
                  اطلاعات کلی :
                </h2>
                <div className="bg-gray-100  w-full rounded-xl">
                  <div className="p-2 sm:p-3">
                    <div className=" rounded-xl bg-gray-50">
                      <div className="flex flex-col gap-5 p-2">
                        {/* desc */}
                        <div className="w-full">
                          <div className="flex gap-x-1">
                            <span className=" text-gray-500 ">
                              <GiWeightScale />
                            </span>
                            <div>
                              <p className="mb-2 text-sm font-medium text-gray-500 ">
                                وزن محصول
                              </p>
                              <h2 className="text-base font-semibold  text-gray-700 ">
                                {productDetail.weight} گرم
                              </h2>
                            </div>
                          </div>
                        </div>
                        {/* desc */}
                        <div className="w-full">
                          <div className="flex gap-x-1">
                            <span className=" text-gray-500 ">
                              <BiCategory />
                            </span>
                            <div>
                              <p className="mb-2 text-sm font-medium text-gray-500 ">
                                دسته بندی
                              </p>
                              <h2 className="text-base font-semibold  text-gray-700 ">
                                {cat}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-6 mb-6 border-t border-b border-gray-200 ">
                <span className="text-base text-gray-600 ">وضعیت کالا : </span>
                <p className="mt-2 text-sm text-blue-500 ">
                  <span className="text-gray-600 ">
                    {status === "m"
                      ? "کالا موجود می باشد"
                      : "کالا موجود نمی باشد لطفا با پشتیبانی تماس بگیرید"}
                  </span>
                </p>
              </div>
              <div className="mb-6 "></div>
              <div className="flex flex-wrap flex-col gap-2 items-center mb-6">
                <div
                  className={`${
                    (quantityCount(state, productDetail.id) == 0
                      ? "bg-yellow-500"
                      : "bg-white") &&
                    status === "m" &&
                    productDetail.live_price !== "با پشتیبانی تماس بگیرید"
                      ? "bg-yellow-500  hover:bg-gradient-to-r hover:from-yellow-500 hover:ring-yellow-400 hover:to-yellow-400"
                      : "hidden"
                  } text-md flex text-center justify-center items-center gap-5 rounded
             shadow-md w-full py-1.5 overflow-hidden group  hover:bg-gradient-to-r relative
               text-white hover:ring-2 hover:ring-offset-2  transition-all ease-out duration-300 `}
                >
                  {isInCart(state, productDetail.id) ? (
                    <button
                      className={`${
                        quantityCount(state, productDetail.id) <
                        productDetail.count
                          ? ""
                          : "pointer-events-none"
                      }
                    border p-1 rounded-sm hover:bg-green-400
                    `}
                      onClick={() =>
                        dispatch({ type: "INCREASE", payload: productDetail })
                      }
                    >
                      <FaPlus />
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        dispatch({ type: "ADD_ITEM", payload: productDetail })
                      }
                    >
                      افزودن به سبد
                    </button>
                  )}
                  {quantityCount(state, productDetail.id) <=
                    productDetail.count && (
                    <span>{quantityCount(state, productDetail.id)}</span>
                  )}
                  {quantityCount(state, productDetail.id) ===
                    productDetail.count && (
                    <span className="text-gray-500">حداکثر</span>
                  )}
                  {quantityCount(state, productDetail.id) > 1 && (
                    <button
                      className="border p-1 rounded-sm hover:bg-red-400"
                      onClick={() =>
                        dispatch({ type: "DECREASE", payload: productDetail })
                      }
                    >
                      <FaMinus />
                    </button>
                  )}
                  {quantityCount(state, productDetail.id) === 1 && (
                    <button
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_ITEM",
                          payload: productDetail,
                        })
                      }
                    >
                      <FaTrashCan />
                    </button>
                  )}
                </div>
                <div
                  className={`${
                    status !== "m" ||
                    productDetail.live_price == "با پشتیبانی تماس بگیرید"
                      ? "bg-red-500 pointer-events-none  hover:from-red-500 hover:ring-red-400 hover:to-red-400"
                      : "hidden"
                  } text-md flex text-center justify-center items-center gap-1 rounded
             shadow-md w-full py-1.5 overflow-hidden group  hover:bg-gradient-to-r relative
               text-white hover:ring-2 hover:ring-offset-2  transition-all ease-out duration-300 `}
                >
                  <span>ناموجود</span>
                </div>

                {/*  */}
                {/* <div
                  className={`${
                    status === "m" &&
                    productDetail.live_price !== "با پشتیبانی تماس بگیرید"
                      ? "bg-yellow-500  hover:bg-gradient-to-r hover:from-yellow-500 hover:ring-yellow-400 hover:to-yellow-400"
                      : "bg-red-500 pointer-events-none  hover:from-red-500 hover:ring-red-400 hover:to-red-400"
                  } text-md flex text-center justify-center items-center gap-1 rounded
             shadow-md w-full py-1.5 overflow-hidden group  hover:bg-gradient-to-r relative
               text-white hover:ring-2 hover:ring-offset-2  transition-all ease-out duration-300 `}
                 
                >
                  {isInCart(state, productDetail.id) ? (
                    <button
                      onClick={() =>
                        dispatch({ type: "INCREASE", payload: productDetail })
                      }
                    >
                    
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        dispatch({ type: "ADD_ITEM", payload: productDetail })
                      }
                    >
                      {productDetail.status === "m" &&
                      productDetail.live_price !== "با پشتیبانی تماس بگیرید" ? (
                        <>افزودن</>
                      ) : (
                        <span>ناموجود</span>
                      )}
                    </button>
                  )}
                  {quantityCount(state, productDetail.id) > 0 && (
                    <span>{quantityCount(state, productDetail.id)}</span>
                  )}
                  {quantityCount(state, productDetail.id) > 1 && (
                    <button
                      onClick={() =>
                        dispatch({ type: "DECREASE", payload: productDetail })
                      }
                    >
                      <FaMinus />
                    </button>
                  )}
                  {quantityCount(state, productDetail.id) === 1 && (
                    <button
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_ITEM",
                          payload: productDetail,
                        })
                      }
                    >
                      <FaTrashCan />
                    </button>
                  )}
                </div>  */}

                {/*  old   */}
                {/* {isInCart(state, productDetail.id) ? (
                  <button
                    className="cursor-pointer flex items-center gap-1  justify-center shadow-md w-full py-1.5 overflow-hidden group bg-green-500 relative  text-white  transition-all ease-out duration-300  text-center rounded-sm "
                    onClick={() => {
                      dispatch({ type: "INCREASE", payload: productDetail });
                    }}
                  >
                  </button>
                ) : (
                  <span
                    className={`${
                      status === "m"
                        ? "bg-yellow-500"
                        : "bg-red-500 hover:to-red-400 hover:from-red-500 hover:ring-red-400 pointer-events-none "
                    } 
                    text-md flex text-center justify-center items-center gap-1 rounded shadow-md 
                    w-full py-1.5 overflow-hidden group relative
                     hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400
                      text-white hover:ring-2 hover:ring-offset-2 hover:ring-yellow-400
                       transition-all ease-out duration-300 `}
                    onClick={() =>
                      dispatch({ type: "ADD_ITEM", payload: productDetail })
                    }
                  >
                    {status === "m" ? (
                      <p>افزودن به سبد</p>
                    ) : (
                      //  <BiCartAdd className="text-xl" />
                      <p className="flex items-center justify-center gap-1">
                        ناموجود
                        <RxCross2 className="text-xl" />
                      </p>
                    )}
                  </span>
                )}
                {/* back to Shop */}
                <Link to="/products" className="w-full cursor-pointer">
                  <button
                    className="bg-blue-500 text-md flex text-center justify-center items-center gap-1 rounded shadow-md 
                    w-full py-1.5 overflow-hidden group relative
                     hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400
                      text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400
                       transition-all ease-out duration-300 "
                  >
                    بازگشت
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
