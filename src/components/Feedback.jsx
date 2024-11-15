import React, { useState } from "react";

function Feedback() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    console.log("Previous button clicked");
  };

  const handleNext = () => {
    console.log("Next button clicked");
  };

  return (
    <div className="w-full h-[861.95px] min-w-[390px] gap-2">
      <div className="p-8 md:p-16 md:ml-[80px]">
        <div className="w-full h-[138px] md:h-[110px] gap-2 md:gap-8">
          <h1 className="text-[#BD1F17] font-roboto font-bold text-[16px] md:text-[20px] leading-[26px] md:leading-[32px]">
            <span className="w-2.5 h-2.5 bg-[#BD1F17] mr-3 inline-block"></span>
            Crispy, Every Bite Taste
          </h1>
          <h1 className="font-bebas font-bold text-[40px] md:text-[62px] leading-[48px] md:leading-[62px] pt-2">
            What Some of my Customers Say
          </h1>
        </div>
        <div className="md:flex md:flex-row-reverse">
          <div className="relative w-full min-w-[330px] md:h-[555px] h-[240px] sm:h-[300px] ">
            <video
              ref={videoRef}
              src="src/assets/video.webm"
              className="w-full h-full object-cover"
              controls={false}
            />
            <div
              id="icon"
              onClick={handlePlayPause}
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
            >
              {!isPlaying && (
                <img
                  src="src/assets/Play.png"
                  alt="Play Button"
                  className="w-16 h-16"
                />
              )}
            </div>
          </div>
          <div className="w-full min-w-[330px] md:w-[556px] md:h-[555px] h-[335px]  gap-[37px] bg-[#FEBF00]">
            <div>
              <h1 className="font-roboto text-[18px] p-[30px] md:p-[40px] leading-[28ppx]">
                <span className="text-[59.93px] leading-[76.57px]">“</span>
                You can't go wrong with Chicken Mandi, I had it twice. The
                chicken was cooked perfectly, juicy & soft (usually mandi
                chicken is a bit dry). I would definitely recommend it.
              </h1>
            </div>
            <div className="flex p-[20px] py-8 md:py-40 justify-between">
              <div>
                <h1 className="font-bebas font-bold text-[18px] leading-[19.98px]">
                  Khalid Al Dawsry
                </h1>
                <h1 className="font-roboto text-[14px] leading-[13.32px]">
                  Jeddah, Saudi
                </h1>
              </div>
              <div>
                <img src="src/assets/person.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-4 space-x-4 z-10 md:absolute md:top-[-80px] md:right-5">
        <button
          className="w-12 h-12 flex items-center justify-center bg-[#FFFFFF] rounded-full shadow-md"
          onClick={handlePrevious}
        >
          <svg
            className="w-6 h-6 text-[# 0A1425]"
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
          onClick={handleNext}
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
  );
}

export default Feedback;
