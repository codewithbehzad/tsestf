/* eslint-disable react/prop-types */
import React, { useContext } from "react";

// icons
import { FaTrashCan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

// Context
import { CartContext } from "../../context/CartContextProvider";

// functions
import { separate } from "../shared/SepratePrice";
import { button } from "@material-tailwind/react";

function Cart(props) {
  const { dispatch } = useContext(CartContext);
  const { image, title, live_price, itemsCounter, id, weight, quantity } =
    props.data;

  return (
    <div className="flex items-center justify-between mb-10 hover:bg-gray-100  px-10 sm:px-5 py-5">
      <div className="flex w-2/5">
        {/* <!-- product --> */}
        <div className="sm:w-20 w-14">
          <img
            className="sm:h-20 h-14 rounded-sm"
            src={image}
            alt="Product Image"
          />
        </div>
        <div className="flex flex-col justify-evenly mr-4 flex-grow">
          <span className="font-bold sm:text-sm text-xs">{title}</span>
          <span className="text-red-500 sm:text-sm text-xs">{weight} گرم</span>
        </div>
      </div>
      {/* id */}
      <div className="flex justify-center items-center rounded-md w-1/5">
        <p className="bg-gray-100 rounded-sm py-0.5 px-1 sm:px-2">{id}</p>
      </div>
      <span className="text-center w-1/5 font-semibold sm:text-sm text-xs">
        {separate(live_price)}
      </span>
      {/* product counter */}
      <div className=" flex items-center gap-x-2 justify-center md:px-2 w-1/5">
        <button
        className="text-white bg-green-500 hover:bg-green-400 p-1 mr-7 sm:mr-0 rounded-md"
          onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
        >
          <FaPlus />
        </button>
        <span>{quantity}</span>

        {quantity > 1 ? (
          <button
          className="text-white bg-red-500 hover:bg-red-400 p-1 rounded-md"
            onClick={() => dispatch({ type: "DECREASE", payload: props.data })}
          >
            <FaMinus />
          </button>
        ) : (
          <button
          className="text-white bg-blue-500 hover:bg-blue-400 p-1 rounded-md"
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: props.data })
            }
          >
            <FaTrashCan />
          </button>
        )}
      </div>
    </div>
  );
}

export default Cart;
