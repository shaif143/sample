import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Foods() {
  const carouselRef = useRef();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="w-full h-full md:h-[710px] bg-[#FBF7F2]">
        <div>
          <div className="p-6 gap-[40px] md:p-14 lg:p-24 md:ml-6">
            <div className="h-[82px] lg:h-[110px] gap-[8px] px-4">
              <h1 className="text-[#BD1F17] font-roboto font-bold text-[16px] md:text-[20px] leading-[26px] md:leading-[32px]">
                <span className="w-2.5 h-2.5 bg-[#BD1F17] mr-3 inline-block"></span>
                Crispy, Every Bite Taste
              </h1>
              <h1 className="font-bebas font-bold text-[40px] md:text-[62px] leading-[48px] md:leading-[62px] pt-2">
                POPULAR FOOD ITEMS
              </h1>
            </div>
            <div className="relative py-2">
              <Carousel
                responsive={responsive}
                ref={carouselRef}
                swipeable={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                // customTransition="all .5"
                arrows={false}
                itemClass="carousel-item-padding-40-px"
                className="pl-4"
              >
                <div className="w-[330px] md:w-[306px] h-[300px] bg-[#FFFFFF] flex flex-col items-center mt-8 p-[32px] z-10">
                  <div className="flex flex-col items-center w-[186px] h-[124px] top-[-2px] left-[-33px]">
                    <img src="src/assets/burger.png" alt="" />
                  </div>
                  <div className="w-[57PX] h-0 border-t-4 border-[#BD1F17] mt-4"></div>
                  <div className="flex flex-col items-center py-4">
                    <h1 className="font-bebas text-[24px] leading-[36px] font-bold">
                      VEGETABLES BURGER
                    </h1>
                    <h1 className="font-inter font-normal text-[16px] leading-[32px] tracking-[-0.015rem]">
                      Barbecue Italian cuisine pizza
                    </h1>
                  </div>
                </div>
                <div className="w-[330px] md:w-[306px] h-[300px] bg-[#FFFFFF] flex flex-col items-center mt-8 p-[32px] z-10">
                  <div className="flex flex-col items-center w-[186px] h-[124px] top-[-2px] left-[-33px]">
                    <img src="src/assets/pizza.png" alt="" />
                  </div>
                  <div className="w-[57PX] h-0 border-t-4 border-[#BD1F17] mt-4"></div>
                  <div className="flex flex-col items-center py-4">
                    <h1 className="font-bebas text-[24px] leading-[36px] font-bold">
                      Spacial Pizza
                    </h1>
                    <h1 className="font-inter font-normal text-[16px] leading-[32px] tracking-[-0.015rem]">
                      Barbecue Italian cuisine pizza
                    </h1>
                  </div>
                </div>
                <div className="w-[330px] md:w-[306px] h-[300px] bg-[#FFFFFF] flex flex-col items-center mt-8 p-[32px] z-10">
                  <div className="flex flex-col items-center w-[186px] h-[124px] top =[-2px] left-[-33px]">
                    <img src="src/assets/fries.png" alt="" />
                  </div>
                  <div className="w-[57PX] h-0 border-t-4 border-[#BD1F17] mt-4"></div>
                  <div className="flex flex-col items-center py-4">
                    <h1 className="font-bebas text-[24px] leading-[36px] font-bold">
                      SPACIAL FRENCH FRIES
                    </h1>
                    <h1 className="font-inter font-normal text-[16px] leading-[32px] tracking-[-0.015rem]">
                      Barbecue Italian cuisine
                    </h1>
                  </div>
                </div>
                <div className="w-[330px] md:w-[306px] h-[300px] bg-[#FFFFFF] flex flex-col items-center mt-8 p-[32px] z-10">
                  <div className="flex flex-col items-center w-[186px] h-[124px] top-[-2px] left-[-33px]">
                    <img src="src/assets/chicken.png" alt="" />
                  </div>
                  <div className="w-[57PX] h-0 border-t-4 border-[#BD1F17] mt-4"></div>
                  <div className="flex flex-col items-center py-4">
                    <h1 className="font-bebas text-[24px] leading-[36px] font-bold">
                      CUISINE CHICKEN
                    </h1>
                    <h1 className="font-inter font-normal text-[16px] leading-[32px] tracking-[-0.015rem]">
                      Japanese Cuisine Chicken
                    </h1>
                  </div>
                </div>
              </Carousel>
              <div className="flex items-center justify-center py-4 space-x-4 bg-[#FBF7F2] z-10 sm:absolute sm:top-[-80px] sm:right-5">
                <button
                  className="w-12 h-12 flex items-center justify-center bg-[#FFFFFF] rounded-full shadow-md"
                  onClick={() => carouselRef.current.previous()}
                >
                  <svg
                    className="w-6 h-6 text-[#0A1425]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <button
                  className="w-12 h-12 flex items-center justify-center bg-[#FFFFFF] rounded-full shadow-md"
                  onClick={() => carouselRef.current.next()}
                >
                  <svg
                    className="w-6 h-6 text-[#BD1F1F]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:relative top-[-440px]">
            <img src="src\assets\food.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Foods;
