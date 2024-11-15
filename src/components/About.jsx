import React, { useState } from "react";

function About() {
  const [activeButton, setActiveButton] = useState("About");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <div className="w-full h-[1260px] md:h-[820px] bg-[#FFFFFF] lg:px-[140px] md:py-12 ">
        <div className="w-full max-h-[1080.03px] gap-6 px-6 flex flex-col md:flex-row justify-between items-start">
          <div id="left" className="py-6 lg:py-12 md:w-1/2 lg:w-1/2">
            <img src="src/assets/about.png" alt="image" />
          </div>

          <div className="flex flex-col md:w-1/2 lg:w-1/2 lg:py-12">
            <div>
              <div className="flex gap-4 border-b border-[#b52b1d]">
                <button
                  id="about"
                  type="button"
                  onClick={() => handleButtonClick("About")}
                  className={`w-[73px] h-[36px] px-4 py-1.5 ${
                    activeButton === "About" ? "bg-[#B52B1D]" : ""
                  }`}
                >
                  About
                </button>
                <button
                  id="Experience"
                  onClick={() => handleButtonClick("Experience")}
                  className={`w-[107px] h-[36px] px-4 py-1.5 ${
                    activeButton === "Experience" ? "bg-[#B52B1D]" : ""
                  }`}
                >
                  Experience
                </button>
                <button
                  id="Contact"
                  onClick={() => handleButtonClick("Contact")}
                  className={`w-[86px] h-[36px] px-4 py-1.5 ${
                    activeButton === "Contact" ? "bg-[#B52B1D]" : ""
                  }`}
                >
                  Contact
                </button>
              </div>
              <div className="py-4">
                <h1 className="text-[40px] font-bebas font-bold leading-12">
                  Exceptional culinary <br /> experience and delicious food
                </h1>
              </div>
              <div>
                <h1>
                  {activeButton === "About" &&
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus minus accusamus voluptatem dolores atque voluptas quaerat excepturi at aliquid nostrum laboriosam ab dolorum, omnis rerum sequi pariatur libero incidunt eaque?"}
                  {activeButton === "Experience" && "Experience"}
                  {activeButton === "Contact" && "Contact"}
                </h1>
              </div>
              <div className="flex gap-4 md:gap-8 w-[330px] md:w-[624px] py-5">
                <div>
                  <button
                    type="button"
                    className="w-[180px] h-[56px] bg-[#FEBF00]"
                  >
                    <h1 className="font-roboto font-bold text-[18px] leading-[24px] flex justify-center items-center">
                      ABOUT MORE
                    </h1>
                  </button>
                </div>
                <div className="flex w-[204px] h-[56px] gap-2 py-4 pr-6">
                  <img
                    src="src/assets/phone.png"
                    alt=""
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                  <h1 className="font-roboto font-bold text-[14px] md:text-[18px] leading-[24px] whitespace-nowrap">
                    +88 3426 739 485
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[330px] h-[274px] py-4 md:flex md:w-full md:h-auto md:space-x-4">
          <div className="flex items-center w-full md:w-[400px] gap-4">
            <img src="src/assets/delivery.png" alt="" />
            <div>
              <h1 className="font-bebas font-bold text-[24px] md:text-[30px] leading-[36px] md:leading-[36px]">
                FAST DELIVERY
              </h1>
              <h1 className="font-inter text-[18px] leading-[26px] md:text-[20px] text-left md:leading-[32px] md: tracking-[-0.015rem]">
                Grab your food order
              </h1>
            </div>
          </div>
          <div className="flex items-center w-full md:w-[400px] gap-4">
            <img src="src/assets/delivery1.png" alt="" />
            <div>
              <h1 className="font-bebas font-bold text-[24px] md:text-[30px] leading-[36px] md:leading-[36px]">
                ABSOLUTE DINING
              </h1>
              <h1 className="font-inter text-[18px] leading-[26px] md:text-[20px] text-left md:leading-[32px] md: tracking-[-0.015rem]">
                Grab your food order
              </h1>
            </div>
          </div>

          <div className="flex items-center w-full md:w-[400px] gap-4">
            <img src="src/assets/delivery2.png" alt="" />
            <div>
              <h1 className="font-bebas font-bold text-[24px] md:text-[30px] leading-[36px] md:leading-[36px]">
                PICKUP DELIVERY
              </h1>
              <h1 className="font-inter text-[18px] leading-[26px] md:text-[20px] text-left md:leading-[32px] md:tracking-[-0.015rem]">
                Grab your food order
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
