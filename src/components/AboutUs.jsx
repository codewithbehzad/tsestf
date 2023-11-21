import React from "react";

// assets
import aboutImg from "../assets/images/about-us.jpg";
import flag from "../assets/images/Flags.png";
const AboutUs = () => {
  return (
    <section className="mx-auto max-w-6xl sm:shadow-md -z-50 shadow-none rounded-lg w-full md:mt-20 md:mb-4 justify-between mb-12 items-center sm:gap-4 gap-6 p-4 px-4 sm:flex-row-reverse flex flex-col-reverse">
      <div className="flex relative sm:w-1/2 text-sm md:text-base px-4 flex-col gap-2 items-center w-full">
        <h3 className="font-bold text-sloganPrimary text-xl">
          Nankar<span className="text-yellow-400">Gold</span>.ir
        </h3>
        <p>
          مجموعه ما چند سالی ست که در زمینه بورس، کریپتو، فارکس، بازار طلا و...
          فعالیت دارد. از امسال تصمیم گرفتیم که بصورت حرفه ای روی خرید و فروش
          طلا در اینستاگرام و سایت کار کنیم. اعتماد شما دلیل فعالیت این سایته.
          شد شد نشد میریم آلمان
        </p>
        <img
          className="w-12 sm:w-16 sm:top-36 md:top-40 lg:w-24 absolute top-40 left-10 text-center"
          src={flag}
          alt="Flag"
        />
      </div>
      <div className="sm:w-1/3 w-[250px] mb-4">
        <img src={aboutImg} alt="about-us" />
      </div>
    </section>
  );
};

export default AboutUs;
