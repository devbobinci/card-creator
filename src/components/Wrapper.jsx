import React from "react";

const Wrapper = (props) => {
  return (
    <div className="md:max-w-3xl mx-auto flex flex-col xl:flex-row xl:justify-center xl:gap-[10vh] xl:items-center xl:h-[100vh] xl:max-w-6xl 2xl:max-w-7xl">
      {props.children}
    </div>
  );
};

export default Wrapper;
