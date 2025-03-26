import React from "react";
import Location01Icon from "../../public/location-01-stroke-rounded (2)";
import GlobalIcon from "../../public/global-stroke-rounded (2)";
function NavTop() {
  return (
    <div className="bg-[#101218] text-white">
      <div className="container m-auto flex items-center justify-between px-32 p-2">
        <div className=" flex  items-center gap-2">
          <Location01Icon />
          <p>Toshkent</p>
        </div>
        <div className=" flex  gap-12 items-center ">
          <p>{"Bizning do'konlarimiz"}</p>
          <p className="bg-gray-600 p-1 rounded">Yuridik shaxslar uchun</p>
          <p>T{"o'lov usullari"}</p>
        </div>
        <div className=" flex items-center gap-4">
          <p>Aloqa markazi : +99871 209 99 44</p>
          <div className=" border rounded-xl w-14 flex items-center ">
          <GlobalIcon /> <span>uz</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavTop;
