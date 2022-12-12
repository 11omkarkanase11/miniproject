import React from "react";
import logo from '../Assets/Touryou.png'; 

const Navbar=()=>{
  return (
    <div className="flex flex-row items-center justify-between h-28">
      <a href="/" className="pl-7 logo lg:ml-10">
        <img height="25%" width="25%" src={logo} alt="logo" />
      </a>

          <div className="flex justify-around w-2/5 mr-12 lg:visible sm:invisible">
              <a href="#home" className="text-lg font-bold text-purple-900 transition-all hover:scale-105">Home</a>
              <a href="#steps" className="text-lg font-bold text-purple-900 transition-all hover:scale-105">Steps</a>
              <a href="#page_sec" className="text-lg font-bold text-purple-900 transition-all hover:scale-105">Pages Section</a>
              <a href="#contact" className="text-lg font-bold text-purple-900 transition-all hover:scale-105">Contact</a>
          </div>

    </div>
  );
};

export default Navbar;
