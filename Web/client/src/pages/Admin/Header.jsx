import React, { useEffect, useState } from "react";

const Header = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateTime();
    }, 1000);

    return () => clearInterval(intervalId); 
  }, []);

  const updateTime = () => {
    const today = new Date();
    const date = today.getDate()+ "/" + (today.getMonth() + 1) +"/"+ today.getFullYear()   ;
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + " " + time;
    setDateTime(dateTime);
  };

  return (
    <div className="bg-[#21222D] p-5 text-[#5DADE2] text-3xl text-center rounded-lg">
      Welcome "Raj Singh"
      <span className="text-[#F7DC6F] ml-60">{dateTime}</span>
    </div>
  );
};

export default Header;
