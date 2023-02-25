import React, { useState } from "react";

import { IoMdSearch } from "react-icons/io";

const Form = ({ setLocation }) => {
  const [currentValue, setCurrentValue] = useState("");
  const [shake, setShake] = useState(false);
  const handleShake = ()=>{
    setShake(true);
    setTimeout(()=>{
      setShake(false);
    }, 1000)
  }

  return (
    <div className={`input-container flex flex-row justify-center items-center bg-black/20 backdrop-blur-[32px] back rounded-full p-1 w-[350px] ${ shake && 'animate-shake'}`}>
      <div className="w-[80%]">
        <input
          className="w-[100%] outline-none ml-6 bg-inherit text-white"
          type="text"
          value={currentValue}
          onChange={(e) => {
            setCurrentValue(e.target.value);
          }}
          placeholder='Search by City Name'
        />
      </div>
      <div className=" items-center justify-center w-[60px] h-[40px] rounded-full ml-4 overflow-hidden">
        <button
          className="items-center justify-center w-full h-full bg-[#1ab7ee] pl-[20px] hover:bg-[#008dc1]"
          onClick={() => {
            if(currentValue === ""){
              handleShake();
            }
            else{
              setLocation(currentValue);
            }
          }}
        >
          <div className="items-center">
            <IoMdSearch className="text-xl text-white self-center" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Form;
