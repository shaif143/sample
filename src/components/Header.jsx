import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="sticky top-0 w-full xs:max-w-[390px] md:max-w-[1920px] lg:h-[108px] h-[77px] mx-auto gap-2 px-8 py-78 flex items-center justify-center text-[#FFFFFF] z-50"
      style={{
        background:
          "linear-gradient(123.4deg, #BD1F17 40.8%, #A61D13 76.4%, #8E1B0F 120.69%)",
      }}
    >
      <div className="w-full xs:max-w-[294px] lg:max-w-[970px] h-[37px] flex gap-[60px] ml-2 md:ml-[70px] lg:ml-[100px] xl:ml-[120px]">
        <div
          id="logo"
          className="flex items-center w-[201.99px] h-[37px] gap-1.5"
        >
          <div className="w-[36.99px] h-[37.01px]">
            <img src="src/assets/logo.png" alt="" />
          </div>
          <h1 className="font-poppins font-semibold text-[28.44px] leading-[28.44px]">
            Restau<span className="font-normal">rant</span>
          </h1>
        </div>

        <div
          id="items"
          className={`${
            isMenuOpen ? "flex" : "hidden md:flex"
          } items-center md:w-[484px] w-full md:flex-row flex-col gap-4 md:gap-[20px] lg:gap-[40px] font-raleway font-medium text-[15px] leading-[17.61px] transition-all duration-300`}
        >
          <ul className="flex md:flex-row flex-col gap-4 lg:gap-[20px] xl:gap-[40px]">
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Clients</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className="w-[157px] h-[44px] bg-[#FEBF00] px-[24px] py-[10px] hidden lg:flex items-center justify-center mr-2 ml-6">
        <button
          type="button"
          className="w-[109px] h-[24px] font-roboto text-[16px] leading-[24px] whitespace-nowrap font-bold text-[#0A1425]"
        >
          BOOK A TABLE
        </button>
      </div>

      <div
        id="menu"
        className={`md:hidden transform transition-transform duration-300 ${
          isMenuOpen ? "rotate-45" : ""
        }`}
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

export default Header;
