import React from "react";
import { TbTemperatureCelsius } from "react-icons/tb";
import {
  BsCloudHaze2Fill,
  BsCloudDrizzleFill,
  BsEye,
  BsWater,
  BsThermometer,
  BsWind,
} from "react-icons/bs";

import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
} from "react-icons/io";

import { ImSpinner8 } from "react-icons/im";

const options = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
};

const Hero = ({ loading, data }) => {
  let icon;
  switch (data?.weather?.[0]?.main) {
    case "Clouds":
      icon = <IoMdCloudy />;
      break;
    case "Haze":
      icon = <BsCloudHaze2Fill />;
      break;
    case "Rain":
      icon = <IoMdRainy className="text-[#31cafb]" />;
      break;
    case "Clear":
      icon = <IoMdSunny className="text-[#ffde33]" />;
      break;
    case "Drizzle":
      icon = <BsCloudDrizzleFill className="text-[#31cafb]" />;
      break;
    case "Snow":
      icon = <IoMdSnow className="text-[#31cafb]" />;
      break;
    case "Thunderstorm":
      icon = <IoMdThunderstorm />;
      break;
  }

  const date = new Date();
  return (
    <div className="w-[350px] h-[450px] mt-6 rounded-3xl bg-black/20 backdrop-blur-[32px] flex flex-col">
      {loading && (
        <div className="absolute left-[calc(50%-24px)] top-[calc(50%-24px)] animate-spin">
          <ImSpinner8 className="text-white text-5xl" />
        </div>
      )}
      {!loading && (
        <div>
          <div className="flex flex-row h-auto"> 
            <div className="ml-10 mt-10 text-white text-[87px]">
              {icon}
            </div>
            <div className="text-white ml-6 items-center justify-end h-[110px] flex flex-col">
              <h2 className="font-semibold text-lg">{data?.name + ', ' + data?.sys?.country}</h2>
              <p className="text-sm mt-1">
                  {
                    date.toLocaleString('en-Us', options)
                  }
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-row items-end justify-center h-32 text-white">
            <div>
              <h1 className="font-normal text-9xl">
                {parseInt(data?.main?.temp)}
              </h1>
            </div>
            <div className="text-3xl self-center">
              <TbTemperatureCelsius />
            </div>
          </div>
          <div className="text-white mt-2 ">
            <p className="text-center">{data?.weather?.[0]?.main}</p>
          </div>
          <div className="h-28 flex flex-row justify-start text-white text-xs">
            <div className="flex flex-col justify-evenly my-4 pl-4 ml-7 w-[45%] ">
              <div className="flex items-center mt-6 ">
                <BsEye />
                <p className="ml-2">
                  Visibility {data?.visibility / 1000 + " km"}
                </p>
              </div>
              <div className="flex items-center mt-6 ">
                <BsThermometer />
                <p className="ml-2 flex">
                  Feels like {parseInt(data?.main?.feels_like)}
                  <TbTemperatureCelsius />
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-evenly my-4 pl-4 w-[45%]">
              <div className="flex items-center mt-6 ">
                <BsWater />
                <p className="ml-2">
                  Humidity {parseInt(data?.main?.humidity)} %
                </p>
              </div>
              <div className="flex items-center mt-6 ">
                <BsWind />
                <p className="ml-2">
                  Wind {parseInt(data?.wind?.speed) + " m/s"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
