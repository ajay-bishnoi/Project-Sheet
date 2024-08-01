import React from "react";
import GithubIcon from "../assets/img/svg/git-icon.svg";
import LiveIcon from "../assets/img/svg/live link.svg";
import {
  APRIL_DATA,
  FEBRUARY_DATA,
  JANUARY_DATA,
  JULY_DATA,
  JUNE_DATA,
  MARCH_DATA,
  MAY_DATA,
} from "../common/Helper";

const monthData = {
  January: JANUARY_DATA,
  February: FEBRUARY_DATA,
  March: MARCH_DATA,
  April: APRIL_DATA,
  May: MAY_DATA,
  June: JUNE_DATA,
  July: JULY_DATA,
};

const Sheet = ({ selectedMonth }) => {
  const data = monthData[selectedMonth] || [];

  return (
    <div className="">
      <h1 className="text-white font-Balsamiq sm:font-bold font-semibold xl:text-[42px] md:text-[36px] mt-16 sm:text-[32px] text-xl leading-6 sm:leading-[56px] xl:leading-[56px] text-center">
        {selectedMonth} Projects
      </h1>
      <div className="flex justify-center mt-10">
        <div className="2xl:max-w-[1410px] xl:max-w-[1250px] lg:max-w-[1070px] max-w-[850px] 2xl:mx-0 sm:mx-3 mx-2  w-full rounded-3xl sm:py-[50px] py-6 backdrop-blur-[50px]">
          <div className="container max-sm:px-0 lg:max-w-[1016px] xl:max-w-[1164px] 2xl:max-w-[1344px] mx-auto ">
            <div className=" flex flex-col gap-8 w-full h-full">
              {data.map((value, index) => (
                <div key={index} className="card-sheet">
                  <div className="md:w-5/12 w-full flex md:justify-around justify-start ">
                    <div className="md:w-full lg:pl-16 md:pl-10 w-full md:pt-0 sm:pt-4 pt-3">
                      <div className="flex md:flex-col justify-between w-full max-md:items-center gap-2">
                        <h2 className="text-white font-Balsamiq sm:font-bold font-medium xl:text-[32px] sm:text-[32px] text-xl leading-6 sm:leading-[38px] xl:leading-[42px]">
                          <span>{`${index + 1}`}.</span> {value.projectName}
                        </h2>
                        <div className=" flex items-center sm:gap-10 gap-5 sm:ml-8">
                          <a target="_blank" href={value.hrefGithub}>
                            <img
                              src={GithubIcon}
                              height={50}
                              width={50}
                              alt="github-link-icon"
                              className="max-sm:max-w-10 duration-300 ease-linear sm:hover:scale-90 hover:scale-95"
                            />
                          </a>
                          <a target="_blank" href={value.hrefLiveLink}>
                            <img
                              src={LiveIcon}
                              height={50}
                              width={50}
                              alt="live-link-icon"
                              className="max-sm:max-w-10 duration-300 ease-linear sm:hover:scale-90 hover:scale-95"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" md:w-7/12 w-full flex md:justify-end justify-center md:mt-0 sm:mt-10 mt-6">
                    <a
                      target="_blank"
                      href={value.hrefLiveLink}
                      className="max-md:w-full"
                    >
                      <img
                        width={370}
                        height={110}
                        src={value.projectImage}
                        alt={`${value.projectName}-Image`}
                        className="md:h-[110px] sm:h-[300px] h-[140px] max-md:min-w-full rounded-2xl md:rounded-[152px] md:object-cover border border-white"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sheet;
