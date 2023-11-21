import React, { useContext } from "react";
// components
import Product from "./shared/Product";

// context
import { ProductContext } from "../context/ProductContextProvider";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-cube";

// import required modules
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCards,
  EffectCube,
} from "swiper/modules";

function ProductSlider() {
  const products = useContext(ProductContext);

  return (
    <div className="flex flex-row swiper items-center justify-center  mb-10  md:mb-20">
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        slidesPerGroup={1}
        breakpoints={{
          // when window width is >= 576px
          576: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // when window width is >= 1024px
          1024: {
            spaceBetween: 10,
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect={false}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper md:w-[600px] lg:w-[900px] sm:w-[400px]
        flex justify-center items-center w-[300px]"
      >
        <SwiperSlide className="swiper-slide p-1">
          <div className="swiper-slide">
            {products.slice(0, 1).map((item) => {
              return <Product productsData={item} key={item.id} />;
            })}
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide p-1">
          <div className="swiper-slide p-1">
            {products.slice(1, 2).map((item) => {
              return <Product productsData={item} key={item.id} />;
            })}
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide p-1">
          <div className="swiper-slide">
            {products.slice(2, 3).map((item) => {
              return <Product productsData={item} key={item.id} />;
            })}
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide p-1">
          <div className="swiper-slide">
            {products.slice(3, 4).map((item) => {
              return <Product productsData={item} key={item.id} />;
            })}
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide p-1">
          <div className="swiper-slide">
            {products.slice(4, 5).map((item) => {
              return <Product productsData={item} key={item.id} />;
            })}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ProductSlider;
