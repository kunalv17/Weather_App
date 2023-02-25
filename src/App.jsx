import React, { useState, useEffect } from "react";
import axios from "axios";

import Form from "./components/Form";
import Hero from "./components/Hero";
import Error from "./components/Error";


const App = () => {
  const [data, setData] = useState("null");
  const [location, setLocation] = useState("New Delhi"); 
  const [loading, setLoading] = useState(false);
  const [notData, setNotData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${import.meta.env.VITE_API_KEY}`;
      axios
        .get(url)
        .then((res) => {
          setTimeout(() => {
            setData(res?.data);
            // set loading to false
            setLoading(false);
          }, 1500);
        })
        .catch((err) =>  {
          setLoading(false);
          if(err){
            setNotData(true)
            setTimeout(()=>{
              setNotData(false);
            }, 3000)
          }
        });
    };

    fetchData();
  }, [location]);

  

  return (
    <>
      <div className={`absolute z-10 justify-center left-[calc(50%-175px)] top-[calc(50%-325px)] ${ !notData && "hidden"}`}>
        <Error data={!data}/>
      </div>
      <div className="absolute flex flex-col justify-center items-center h-full w-full  container-image">
        <Form setLocation={setLocation}/>
        <Hero loading={loading} data={data}/>
      </div>
    </>
  );
};

export default App;
