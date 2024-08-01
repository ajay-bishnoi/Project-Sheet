import React, { useState, useEffect, useRef } from "react";
import { Uparrow } from "./Icon";

const MonthDropDown = ({ onSelectMonth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMonthSelect = (month) => {
    onSelectMonth(month);
    setIsOpen(false);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="relative inline-block text-left z-30" ref={dropdownRef}>
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex duration-300 ease-linear justify-center font-Balsamiq w-full rounded-md border border-purple shadow-sm px-2 sm:px-4 py-2 bg-white text-base items-center font-medium text-black focus:shadow-md focus:shadow-purpleBlue focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
        >
          <span className=" sm:block hidden">Select Month</span>{" "}
          <span className=" sm:hidden"> Months</span>
          <Uparrow
            className={`duration-300 ease-linear ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>
      {isOpen && (
        <div
          className={`origin-top-right absolute right-0 mt-2 sm:w-[168px] w-[110px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 transition-transform duration-300 ease-linear ${
            isOpen ? "scale-100" : "opacity-0"
          }`}
        >
          <div className="py-1">
            {months.map((month, index) => (
              <a
                key={index}
                href="#"
                onClick={() => handleMonthSelect(month)}
                className="block px-4 py-2 text-base font-Balsamiq text-gray-700 hover:bg-gray-100 hover:text-purpleBlue"
              >
                {month}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MonthDropDown;
