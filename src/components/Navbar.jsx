import React from "react";
import ProfilePic from "../assets/img/png/me.jpg";
import MonthDropDown from "../common/MonthDropDown";

const Navbar = ({ onSelectMonth }) => {
  return (
    <div className="flex justify-center">
      <div className="2xl:max-w-[1410px] xl:max-w-[1250px] lg:max-w-[1070px] max-w-[850px] 2xl:mx-0 sm:mx-3 mx-2 bg-white w-full rounded-[20px] shadow-custom-xl">
        <div className="container lg:max-w-[1016px] xl:max-w-[1164px] 2xl:max-w-[1344px] mx-auto sm:py-4 py-2  xl:py-[16px]">
          <div className=" flex justify-between items-center">
            <div className=" flex items-center gap-3">
              <img
                src={ProfilePic}
                alt="Profile-Picture"
                className="h-[60px] w-[60px] rounded-full"
              />
              <span className=" font-Balsamiq font-bold text-base leading-5 text-black ">
                Ajay Bishnoi [509]
              </span>
            </div>
            <h2 className=" text-purpleBlue font-Balsamiq font-bold text-[36px] leading-[46px] hidden md:inline">
              Project{" "}
              <span className=" bg-black text-white px-3 py-1 rounded-xl text-[32px]">
                Sheet
              </span>
            </h2>
            <MonthDropDown onSelectMonth={onSelectMonth} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
