import React from "react";
import Header from "./header";

function Home() {
  return (
    <>
      <div
        className="w-full h-full md:h-[980px] text-[#FFFFFF]"
        style={{
          background:
            "linear-gradient(123.4deg, #BD1F17 40.8%, #A61D13 76.4%, #8E1B0F 120.69%)",
        }}
      >
        <div className="relative w-full h-[790px] sm:h-[820px] md:h-[850px] flex flex-col lg:flex-row px-10 md:px-20 lg:px-[170px] py-20 lg:py-60 z-0">
          <div className="lg:relative z-10">
            <div id="container" className="bg-[#BD1F17] bg-opacity-70">
              <h1 className="min-[320px]:w-[330px] sm:w-[700px] lg:w-[830px] text-[48px] sm:text-[60px] md:text-[90px] lg:text-[120px] leading-[56px] md:leading-[100px] lg:leading-[130px] font-bebas font-bold z-10">
                TASTE THE AUTHENTIC
                <br /> SAUDI CUISINE
              </h1>
            </div>
            <h1 className="font-roboto max-w-[559px] text-[20px] leading-[28px] font-normal py-3">
              Among the best Saudi chefs in the world, serving you something
              beyond flavor
            </h1>
            <div className="py-4">
              <div className="w-[152.8px] h-[48.2px] bg-[#FEBF00] px-[20.4px] py-[13.6px] flex items-center">
                <button
                  type="button"
                  className="w-[112px] h-[21px] font-roboto text-[15.3px] leading-[20.4px] whitespace-nowrap font-bold text-[#0A1425]"
                >
                  EXPLORE MENU
                </button>
              </div>
            </div>
          </div>

          <div
            id="img"
            className="max-w-[330px] sm:max-w-[420px] sm:h-[310.9px] lg:mt-0 lg:absolute lg:right-[130px] lg:top-1/2 transform lg:-translate-y-1/2 lg:w-[40%] lg:max-w-[751.5px] lg:max-h-[649px] lg:h-full flex justify-center z-0"
          >
            <div className="py-12 ">
              <img
                src="src/assets/offer.svg"
                alt="Offer"
                className="h-[310px] sm:h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
