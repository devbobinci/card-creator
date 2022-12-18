import React from "react";
import { MainBackgroundMobile, MainBackgroundDesktop } from "../assets";
import "../globals.css";

const Background = (props) => {
  return (
    <div className="h-screen relative w-full">
      <div className="bg-[url('/src/assets/bg-main-mobile.png')] xl:bg-[url('/src/assets/bg-main-desktop.png')] bg-no-repeat bg-cover w-screen h-[60vw] ss:h-[65vw] sm:h-[35vh] xl:bg-contain xl:w-screen xl:h-full">
        {props.children}
      </div>
    </div>
  );
};

export default Background;
