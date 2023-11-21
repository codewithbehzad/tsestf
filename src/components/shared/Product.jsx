/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaTrashCan } from "react-icons/fa6";
import { MdExpandLess } from "react-icons/md";
import { BiCartAdd } from "react-icons/bi";
import { IoCheckmarkDone } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

// lazy load img
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// seprate
import { separate } from "./SepratePrice";
import { isInCart, quantityCount } from "../../helper/functions";

// Context
import { CartContext } from "../../context/CartContextProvider";

const Product = ({ productsData }) => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className="relative flex shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] w-64 flex-col rounded-xl bg-white bg-clip-border text-gray-700">
      <div className="relative mx-4 -mt-6 w-56 h-48 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <LazyLoadImage
          src={productsData.image}
          effect="blur"
          height="100%"
          width="100%"
          alt="img-blur-shadow"
          className="bg-cover h-full w-full"
        />
      </div>
      <div className="px-4 pt-3">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {productsData.title}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased"></p>
      </div>
      {/* product price */}
      <div className="flex flex-col px-4 md:gap-2">
        <span className="text-sm text-gray-500 md:text-lg font-bold">
          <span>{separate(productsData.live_price)}</span>
          <span
            className={
              productsData.live_price.includes("با پشتیبانی تماس بگیرید")
                ? "hidden"
                : ""
            }
          >
            {"  "}تومان{" "}
          </span>
        </span>
        <div className="flex items-center justify-between text-center mt-1">
          <p>
            وزن:{"  "}
            <span className="bg-blue-500 text-center py-1 px-2 shadow-md bg-center rounded-md text-xs text-white">
              {productsData.weight}
              <span> گرم</span>
            </span>
          </p>
          <p>
            کد:{" "}
            <span className="bg-blue-500 text-center py-1 px-2 shadow-md bg-center rounded-md text-xs text-white">
              {productsData.id}
            </span>
          </p>
        </div>
      </div>
      {/* product action  */}
      <div className="mt-1 flex gap-2 p-3 items-center w-full">
        <div
          className={`${
            productsData.status === "m" &&
            productsData.live_price !== "با پشتیبانی تماس بگیرید"
              ? "flex text-md justify-center gap-5 w-2/3 px-1 py-1.5 border border-gray-200 rounded-md shadow-sm text-red-500 mx-auto"
              : "text-red-500 pointer-events-none border border-gray-200 rounded-md text-md flex text-center justify-center items-center gap-5  shadow-sm w-2/3 py-1.5 overflow-hidden  hover:bg-gradient-to-r relative  hover:ring-2 hover:ring-offset-2  transition-all ease-out duration-300"
          } `}
        >
          {isInCart(state, productsData.id) ? (
            <button
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productsData })
              }
            >
              <FaPlus />
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productsData })
              }
            >
              {productsData.status === "m" &&
              productsData.live_price !== "با پشتیبانی تماس بگیرید" ? (
                <p className="hover:text-yellow-700 text-yellow-500">
                  افزودن به سبد
                </p>
              ) : (
                <p>ناموجود</p>
              )}
            </button>
          )}
          {quantityCount(state, productsData.id) > 0 && (
            <span>{quantityCount(state, productsData.id)}</span>
          )}
          {quantityCount(state, productsData.id) > 1 && (
            <button
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productsData })
              }
            >
              <FaMinus />
            </button>
          )}
          {quantityCount(state, productsData.id) === 1 && (
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productsData })
              }
            >
              <FaTrashCan />
            </button>
          )}
        </div>

        <div className="flex w-1/3 flex-nowrap bg-blue-500 px-1 py-1.5 text-sm text-white flex-grow justify-center shadow-md items-center rounded-md">
          <button>
            <Link to={`/products/${productsData.id}/`}> جزئیات </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
