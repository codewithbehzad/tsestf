import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import React from "react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="flex shadow-sm flex-col mx-0 sm:mx-4 gap-y-4  sm:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] p-5 rounded-lg">
      <div>
        <p className="text-xl font-bold">سوالات متداول</p>
      </div>
      <div className="md:w-full">
        <Accordion
          className="sm:mb-3 mb-1"
          open={open === 1}
          icon={<Icon id={1} open={open} />}
        >
          <AccordionHeader
            className="sm:text-md text-sm bg-yellow-100 m-1 p-2 rounded-lg"
            onClick={() => handleOpen(1)}
          >
            چه زمانی محصول برایم ارسال می شود؟
          </AccordionHeader>
          <AccordionBody className="p-3">
            پس از تکمیل فرایند خرید و پرداخت وجه در صورتی که مشخصات خود را کامل
            وارد کرده باشید محصول بلافاصله تحویل پست می گردد و برایتان کد رهگیری
            مرسوله، پیامک می گردد.
          </AccordionBody>
        </Accordion>
        <Accordion
          className="sm:mb-3 mb-1"
          open={open === 2}
          icon={<Icon id={2} open={open} />}
        >
          <AccordionHeader
            className="sm:text-md text-sm bg-yellow-100 m-1 p-2 rounded-lg"
            onClick={() => handleOpen(2)}
          >
            سفارشم کی به دستم می رسد؟
          </AccordionHeader>
          <AccordionBody className="p-3">
            مجموعه ما سفارش شما را که پس از پرداخت وجه در واتس اپ، نهایی می شود،
            مستقیم از طریق اداره پست با پست پیشتاز به آدرسی که فرستادین ارسال می
            کند در نتیجه زمان تحویل کالا به پست بستگی دارد.
          </AccordionBody>
        </Accordion>

        <Accordion
          className=" mb-1"
          open={open === 3}
          icon={<Icon id={3} open={open} />}
        >
          <AccordionHeader
            className="sm:text-md text-sm bg-yellow-100 m-1 p-2 rounded-lg"
            onClick={() => handleOpen(3)}
          >
            چگونه میتوانم سفارشم را رهگیری کنم؟
          </AccordionHeader>
          <AccordionBody className="p-3">
            بعد از اتمام فرایند خرید و پرداخت وجه کد رهگیری 16 رقمی اداره پست از
            طریق پیامک برای شما ارسال می شود. شما میتوانید در بالای سایت و در
            بخش رهگیری سفارش وارد سایت اداره پست شده و زمان تحویل مرسوله پستی
            خود را مشاهده کنید.
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
}
