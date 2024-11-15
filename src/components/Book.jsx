import React, { useState } from "react";

function Book() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reservationDate, setReservationDate] = useState("");
  const [totalPeople, setTotalPeople] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !reservationDate || !totalPeople) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log({
      name,
      email,
      reservationDate,
      totalPeople,
      message,
    });

    setName("");
    setEmail("");
    setReservationDate("");
    setTotalPeople("");
    setMessage("");
  };

  return (
    <>
      <div className="bg-cover bg-center h-[722px] md:h-[780px] bg-[url('/bg.png')] text-white">
        <div className="p-[40px] md:ml-[90px]">
          <div className="w-full h-[162px] md:h-[174px]">
            <h1 className="text-[#BD1F17] font-roboto font-bold text-[16px] md:text-[20px] leading-[26px] md:leading-[32px]">
              <span className="w-2.5 h-2.5 bg-[#BD1F17] mr-3 inline-block"></span>
              Book Now
            </h1>
            <h1 className="font-bebas font-bold text-[40px] md:text-[62px] leading-[48px] md:leading-[62px] pt-2">
              Book Your Table
            </h1>
            <h1 className="font-roboto font-normal text-[16px] md:text-[20px] leading-[26px] md:leading-[32px] text-[#F7F8F9]">
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
              leo molestie vel, ornare non id blandit netus.
            </h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full min-w-[330px] md:w-[635px] space-y-4 md:space-y-0 py-6 gap-[24px] md:gap-[30px] md:flex md:flex-wrap"
          >
            <div>
              <input
                type="text"
                placeholder=" Your name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-[330px] md:w-[302.5px] h-[46px] gap-2 bg-inherit border border-[#E5E7EB] rounded-none placeholder:font-roboto placeholder:text-[14px] placeholder:text-white placeholder:px-3 placeholder:leading-[22px]"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder=" Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[330px] md:w-[302.5px] h-[46px] gap-2 bg-inherit border border-[#E5E7EB] rounded-none placeholder:font-roboto placeholder:text-[14px] placeholder:text-white placeholder:px-3 placeholder:leading-[22px]"
              />
            </div>

            <div>
              <input
                type="date"
                placeholder="Reservation Date"
                value={reservationDate}
                onChange={(e) => setReservationDate(e.target.value)}
                className="w-[330px] md:w-[302.5px] h-[46px] gap-2 bg-inherit border border-[#E5E7EB] rounded-none placeholder:font-roboto placeholder:text-[14px] placeholder:text-white placeholder:px-3 placeholder:leading-[22px]"
                required
              />
            </div>
            <div>
              <input
                type="number"
                placeholder=" Total People"
                value={totalPeople}
                onChange={(e) => setTotalPeople(e.target.value)}
                className="w-[330px] md:w-[302.5px] h-[46px] gap-2 bg-inherit border border-[#E5E7EB] rounded-none placeholder:font-roboto placeholder:text-[14px] placeholder:text-white placeholder:px-3 placeholder:leading-[22px]"
                required
              />
            </div>
          </form>

          <div className="flex flex-col-reverse left-0">
            <textarea
              placeholder=" Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-[330px] md:w-[635px] h-[140px] gap-2 bg-inherit border border-[#E5E7EB] rounded-none placeholder:font-roboto placeholder:text-[14px] placeholder:text-white placeholder:px-3 placeholder:leading-[22px]"
            />
          </div>
          <div className="py-6 md:py-8">
            <button
              type="submit"
              className="w-[123px] h-[48px] bg-[#FEBF00]"
              onClick={handleSubmit}
            >
              <h1 className="font-roboto font-bold text-[18px] leading-[24px] flex justify-center items-center text-black">
                BOOK NOW
              </h1>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Book;
