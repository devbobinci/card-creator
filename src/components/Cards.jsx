import React from "react";
import { CardBack, CardFront, cardLogo } from "../assets";

const Cards = () => {
  return (
    <div className="md:max-w-3xl mx-auto flex flex-col xl:flex-row xl:justify-center xl:gap-[10vh] xl:items-center xl:h-[100vh] xl:max-w-6xl 2xl:max-w-7xl">
      <div className="card-container sm:w-[550px] sm:mx-auto md:mt-[5vh] lg:mt-[10vh] xl:mt-0 ">
        <div className="relative py-5 ss:pt-[4vh] h-[77vw] ss:h-[81vw] sm:max-h-[45vh] md:h-[445px] xl:min-h-[520px] 2xl:min-h-[550px]">
          <div className="w-[75%] max-w-[420px] xl:w-[80%] xl:max-w-[500px] absolute right-5 xl:bottom-0">
            <img src={CardBack} alt="card back" />
            <p className="absolute right-[15%] top-[43%] ss:top-[44%] ssm:top-[45%] text-[10px] ss:text-xs text-white tracking-[1px]">
              {cvc ? cvc : "000"}
            </p>
          </div>
          <div className="w-[75%] max-w-[420px] h-min xl:w-[80%] xl:max-w-[500px] absolute left-5 bottom-[5%] ssm:bottom-[8%] xl:top-0">
            <img src={CardFront} alt="card front" />

            <div className="absolute top-0 p-4 ss:p-5 md:p-7 w-full h-full xl:h-full flex flex-col justify-between items-start">
              <img
                className="h-[24px] xs:h-[28px] ssm:h-[32px] md:h-[40px]"
                src={cardLogo}
                alt="logo"
              />

              <div className="w-full">
                <p className="text-white pb-1 ss:pb-2 ssm:pb-3 sm:pb-4 md:pb-5 tracking-normal xs:tracking-widest md:tracking-[3px] ss:text-lg ssm:text-[20px] sm:text-[24px] md:text-[26px] xl:text-[28px]">
                  {numbers ? numbers : "0000 0000 0000 0000"}
                </p>

                <div className="flex justify-between text-[10px] ssm:text-xs sm:text-sm text-white uppercase tracking-wide sm:tracking-[1px]">
                  <p>{name ? name : "Jane Appleseed"}</p>
                  <p>
                    <span>{returnMonth()}</span>/
                    <span>{year ? year : "00"}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
