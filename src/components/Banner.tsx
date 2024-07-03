import React from "react";

const Banner: React.FC = () => {
  return (
    <>
      <div className="relative w-full rounded-[3rem]">
        <div
          className="w-full h-[29.375rem] mx-auto md:bg-cover bg-no-repeat bg-center rounded-[3rem]"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 193, 157, 0.2), rgba(2, 0, 67, 0.47)), url('/assets/Rectangle 5.png')`,
          }}
        ></div>
      </div>
    </>
  );
};

export default Banner;
