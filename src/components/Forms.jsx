/* eslint-disable react/no-unknown-property */
import React, { useContext, useEffect, useState } from "react";
// import ReactWhatsapp from "react-whatsapp";

// icons
import { LiaWhatsapp } from "react-icons/lia";
import { Link } from "react-router-dom";

// function
import { separate } from "./shared/SepratePrice";

// Context
import { CartContext } from "../context/CartContextProvider";

function Forms() {
  const { state, dispatch } = useContext(CartContext);
  const [newStateId, setNewStateId] = useState([""]);
  const [sendTitle, setSendTitle] = useState([""]);
  const [productsCount, setProductsCount] = useState([""]);
  const [name, setName] = useState([""]);
  const [lName, setlName] = useState([""]);
  const [postalCode, setPostalCode] = useState([""]);
  const [phone, setPhone] = useState([""]);
  const [address, setAddress] = useState([""]);

  useEffect(() => {
    const newId = async () => {
      const ids = await state.selectedItems.map((item) => {
        setNewStateId((current) => [...current, item.id]);
        setSendTitle((current) => [...current, item.title]);
        setProductsCount((current) => [...current, item.quantity]);
      });
    };

    newId();
  }, []);

  // name
  const nameChange = (event) => {
    setName(event.target.value);
  };

  // last name
  const lNameChange = (event) => {
    setlName(event.target.value);
  };

  // postal code
  const postalCodeChange = (event) => {
    setPostalCode(event.target.value);
  };

  // phone number
  const phoneNumberChange = (event) => {
    setPhone(event.target.value);
  };

  // addres
  const addresChange = (event) => {
    setAddress(event.target.value);
  };

  function sendwhatsappT() {
    var phonenumber = "+989012998662";

    // var email = document.querySelector(".email").value;
    // var country = document.querySelector(".country").value;
    // var message = document.querySelector(".message").value;

    var url =
      "https://wa.me/" +
      phonenumber +
      "?text=" +
      "*آیدی محصولات:*" +
      newStateId +
      "%0a" +
      "*نام محصولات:*" +
      sendTitle +
      "%0a" +
      "*تعداد محصولات:*" +
      productsCount +
      "%0a" +
      "نام :" +
      name +
      "%0a" +
      "نام خانوادگی:" +
      lName +
      "%0a" +
      "شماره تلفن :" +
      phone +
      "%0a" +
      "کد پستی :" +
      postalCode +
      "%0a" +
      "آدرس محل سکونت :" +
      address +
      "%0a" +
      "";

    window.open(url, "_blank").focus();
  }

  return (
    <div className="relative min-h-screen w-full flex justify-center bg-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-no-repeat bg-cover  items-center">
      <div className="max-w-2xl w-full space-y-8 p-8 bg-white rounded-xl shadow-lg z-10">
        <div className="grid  gap-8 grid-cols-1">
          <div className="flex  flex-col ">
            <div className="flex flex-col sm:flex-row items-center">
              <h2 className="font-semibold text-lg">وارد کردن اطلاعات</h2>
              <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
            </div>
            <div className="mt-5">
              <div className="form">
                <div className="md:space-y-2 mb-3">
                  <label className="text-xs font-semibold text-gray-600 py-2">
                    محصولات انتخابی
                    {/* <abbr className="hidden" title="required">
                      *
                    </abbr> */}
                  </label>
                  <div className="md:grid flex flex-col md:grid-cols-2 items-center pt-6">
                    {state.selectedItems.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="w-full mr-4 flex
                           text-gray-600 text-[10px] md:flex-wrap gap-x-2  mb-3 items-center overflow-hidden"
                        >
                          <img
                            className="w-12 h-12 object-cover rounded-xl border"
                            src={item.image}
                            alt="products"
                          />
                          <div>
                            <p className="product">محصول: {item.title}</p>
                            {/* price */}
                            <p>قیمت: {separate(item.live_price)} تومان</p>
                            <p className="count">تعداد: {item.quantity}</p>
                            {/* id */}
                            <p className="id">آیدی: {item.id}</p>
                          </div>
                        </div>
                      );
                    })}

                    <Link className="mt-4 mb-1" to="/products">
                      <span className="focus:outline-none cursor-pointer text-white text-sm py-2 px-3 w-1/4 rounded-full bg-green-400  hover:bg-green-500 hover:shadow-lg">
                        افزودن +
                      </span>
                    </Link>
                  </div>
                  <div>
                    <p className="pt-2 pb-6 text-sm text-red-500 animate-pulse">
                      مبلغ فوق + هزینه پستی
                    </p>
                  </div>
                </div>
                <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                  {/* name */}
                  <div className="mb-3 space-y-2  md:px-2 w-full text-sm">
                    <label className="font-semibold text-gray-600 py-2">
                      نام<abbr className="text-red-500 pr-0.5">*</abbr>
                    </label>
                    <input
                      placeholder="نام خود را وارد کنید"
                      className="appearance-none name placeholder:text-xs block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required="required"
                      type="text"
                      name="integration[shop_name]"
                      id="integration_shop_name"
                      onChange={nameChange}
                    />
                    {/* <p className="text-red text-xs hidden">
                      Please fill out this field.
                    </p> */}
                  </div>
                  {/* Family name */}
                  <div className="mb-3  md:px-2 space-y-2 w-full text-sm">
                    <label className="font-semibold text-gray-600 py-2">
                      نام خانوادگی<abbr className="text-red-500 pr-0.5">*</abbr>
                    </label>
                    <input
                      onChange={lNameChange}
                      placeholder="نام خانوادگی خود را وارد کنید"
                      className="appearance-none lastName placeholder:text-xs block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required="required"
                      type="text"
                      name="integration[shop_name]"
                      id="integration_shop_name"
                    />
                    {/* <p className="text-red text-xs hidden">
                      Please fill out this field.
                    </p> */}
                  </div>
                </div>

                <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                  {/* postal code */}
                  <div className="mb-3 space-y-2 w-full text-sm  md:px-2">
                    <label className="font-semibold text-gray-600 py-2">
                      کد پستی<abbr className="text-red-500 pr-0.5">*</abbr>
                    </label>
                    <input
                      onChange={postalCodeChange}
                      placeholder="کد پستی خود را وارد کنید"
                      className="appearance-none postalCode placeholder:text-xs block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required="required"
                      type="number"
                      name="integration[shop_name]"
                      id="integration_shop_name"
                    />
                    {/* <p className="text-red text-xs hidden">
                      Please fill out this field.
                    </p> */}
                  </div>

                  {/* phone number */}
                  <div className="mb-3  md:px-2 space-y-2 w-full text-sm">
                    <label className="font-semibold text-gray-600 py-2">
                      شماره تماس<abbr className="text-red-500 pr-0.5">*</abbr>
                    </label>
                    <input
                      onChange={phoneNumberChange}
                      placeholder="شماره تلفن خود را وارد کنید"
                      className="appearance-none phoneClient placeholder:text-xs block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required="required"
                      type="number"
                      name="integration[shop_name]"
                      id="integration_shop_name"
                    />
                    {/* <p className="text-red text-xs hidden">
                      Please fill out this field.
                    </p> */}
                  </div>
                </div>

                <div className="flex-auto w-full mb-1 text-sm  md:px-2 space-y-2">
                  <label className="font-semibold text-gray-600 py-2">
                    آدرس محل سکونت<abbr className="text-red-500 pr-0.5">*</abbr>
                  </label>
                  <textarea
                    onChange={addresChange}
                    required=""
                    name="message"
                    id=""
                    className="placeholder:text-xs min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                    placeholder="مثلا: تهران، خیابان فلان، کوچه فلان، پلاک فلان"
                  ></textarea>
                </div>
                <div>
                  <p className="text-xs text-red-500 text-right mb-10 px-3">
                    <abbr className="pl-1">*</abbr>
                    موارد ستاره دار حتما پر شوند
                  </p>
                </div>
                <div className="my-5 md:px-8 flex w-full flex-col-reverse sm:flex-row-reverse sm:gap-3 items-center justify-center">
                  <Link
                    to="/"
                    className="mb-2 w-full md:w-1/2 sm:w-auto flex items-center justify-center gap-2 md:mb-0 bg-red-500 px-8 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-lg hover:shadow-lg hover:bg-red-500 hover:text-black"
                  >
                    لغو
                  </Link>
                  <Link
                    onClick={() => sendwhatsappT()}
                    className="mb-2 flex items-center md:w-1/2 justify-center w-full sm:w-auto gap-2 md:mb-0 bg-green-400 px-2 sm:px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-lg hover:shadow-lg hover:bg-green-500 hover:text-black"
                  >
                    <p className="text-sm">نهایی کردن خرید </p>
                    <LiaWhatsapp className="text-xl" />
                  </Link>
                  {/* <ReactWhatsapp number="+989012998662" message="hello mhossein">
go whats app
                  </ReactWhatsapp> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forms;
