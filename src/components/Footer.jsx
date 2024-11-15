import React from "react";

function Footer() {
  return (
    <>
      <div className="relative bg-cover bg-center h-[999px] md:h-[719.45px] bg-[url('/footer.jpg')] text-white">
        <div className="absolute inset-0 bg-black bg-opacity-80 "></div>
        <div className="relative z-10 p-6 md:pl-10 md:py-[150px]">
          <div className="flex items-center justify-center">
            <h1 className="font-bebas font-bold text-[40px] md:text-[62px] leading-[48px] md:leading-[62px] pt-2 text-center">
              We ready to have you the best dining experiences
            </h1>
          </div>
          <div className="p-6 md:flex items-center justify-center">
            <div className="flex flex-col items-center justify-center p-2 gap-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-[#FEBF00]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <div className="text-center">
                <h1 className="font-bebas font-bold text-[24px] leading-[28px] tracking-[0.06em]">
                  Opening Hours
                </h1>
                <div className="py-3">
                  <h1 className="font-roboto font-normal text-[16px] leading-[25px] text-center">
                    Monday - Sunday
                    <br />
                    9:00 AM to 11:30 PM
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 ">
              <img src="src\assets\call.png" alt="" />

              <div className="text-center">
                <h1 className="font-bebas font-bold text-[24px] leading-[28px] tracking-[0.06em]">
                  Let's Talk
                </h1>
                <div className="py-3">
                  <h1 className="font-roboto font-normal text-[16px] leading-[25px] text-center">
                    Phone: 1-800-222-4545 <br /> Fax: 1-800-222-4545
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-[#FEBF00]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>

              <div className="text-center">
                <h1 className="font-bebas font-bold text-[24px] leading-[28px] tracking-[0.06em]">
                  Book A Table
                </h1>
                <div className="py-3">
                  <h1 className="font-roboto font-normal text-[16px] leading-[25px] text-center">
                    Email: demo@website.com
                    <br />
                    Support: support@website.com
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-[#FEBF00]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>

              <div className="text-center">
                <h1 className="font-bebas font-bold text-[24px] leading-[28px] tracking-[0.06em]">
                  Our Address
                </h1>
                <div className="py-3">
                  <h1 className="font-roboto font-normal text-[16px] leading-[25px] text-center">
                    123 Stree New York City , United <br /> States Of America.
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex-col">
            <div className="flex items-center justify-center gap-[16.16px] pt-[40px]">
              <img src="src\assets\fb.png" alt="" />
              <img src="src\assets\x.png" alt="" />
              <img src="src\assets\insta.png" alt="" />
              <img src="src\assets\linkedin.png" alt="" />
            </div>
            <div className="flex items-center justify-center py-4">
              <h1 className="font-roboto font-normal text-[16px] md:text-[21px] leading-[18.75px] md:leading-[24.61px] tracking-[0.03em]">
                © 2023 All Rights Reserved{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
