import React, { useContext, useEffect, useState } from "react";

// components
import Product from "./shared/Product";

// context
import { ProductContext } from "../context/ProductContextProvider";

const Store = () => {
  const products = useContext(ProductContext);

  const [activeGenre, setActiveGenre] = useState("all");
  const [filtered, setFiltered] = useState(products);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFiltered(products);
    if (activeGenre == "all") {
      setFiltered(products);
      return;
    }
    const filter = products.filter((item) => item.slug == activeGenre);
    setFiltered(filter);
  }, [activeGenre, products]);

  return (
    <div className="px-4 sm:pt-10 pb-10 rounded-lg mt-10 mb-10 md:mb-20 md:mt-3 w-full flex gap-10 flex-col items-center justify-center h-full">
      <div className="flex  flex-col items-center justify-center md:gap-8 gap-5">
        <div className="relative flex items-center w-full h-12 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] mb-2 bg-white overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>

          <input
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            className="h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="جستجوی محصول"
          />
        </div>
        <div className="flex flex-wrap gap-y-7 gap-x-2 mb-5 md:mb-14">
          <button
            onClick={() => setActiveGenre("all")}
            className="px-5 py-2.5 font-medium bg-violet-50 hover:bg-violet-100 hover:text-violet-700 text-violet-500 rounded-lg text-sm"
          >
            همه محصولات
          </button>
          <button
            onClick={() => setActiveGenre("Zinati")}
            className="px-5 py-2.5 font-medium bg-yellow-50 hover:bg-yellow-100 hover:text-yellow-700 text-yellow-500 rounded-lg text-sm"
          >
            طلای زینتی
          </button>
          <button
            onClick={() => setActiveGenre("shemsh-gold")}
            className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-700 text-blue-500 rounded-lg text-sm"
          >
            شمش طلا
          </button>
          <button
            onClick={() => setActiveGenre("abshodeh")}
            className="px-5 py-2.5 font-medium bg-green-50 hover:bg-green-100 hover:text-green-700 text-green-500 rounded-lg text-sm"
          >
            طلای آبشده
          </button>
          <button
            onClick={() => setActiveGenre("Sekkeh")}
            className="px-5 py-2.5 font-medium bg-orange-50 hover:bg-orange-100 hover:text-orange-700 text-orange-500 rounded-lg text-sm"
          >
            سکه طلا
          </button>
        </div>
      </div>

      <div className="flex products-center flex-wrap gap-y-20 items-center justify-center md:gap-y-16 flex-col sm:flex-row gap-10 md:px-8">
        {filtered
          .filter((item) => {
            if (searchTerm == "") {
              return item;
            } else if (item.title.includes(searchTerm)) {
              return item;
            } else if (item.title !== searchTerm) {
              return null;
            }
          })
          .map((product) => (
            <Product productsData={product} key={product.id} />
          ))}
      </div>
    </div>
  );
};

export default Store;
