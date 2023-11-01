import React, { useState } from "react";
import signature from "../images/signature.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex px-7 py-7 justify-between">
      <a href="/"><img src={signature} alt="Signature" className="w-52 h-auto invert"/></a>
      <div>

      </div>
      <nav className="flex-col">
      <button onClick={handleToggle} className="float-right clear-both mb-5">{!toggle ? <AiOutlineMenu size={30} color="white"/> : <AiOutlineClose size={30} color="white"/>}</button>
        {toggle ?
          <ul className="block text-white text-lg md:text-2xl">
              <li className="float-right clear-both m-1 md:m-2 font-semibold tracking-wider">
                <a href="#about" className="group transition duration-300">
                  About
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                </a>
              </li>
              <li className="float-right clear-both m-1 md:m-2 font-semibold tracking-wider">
                <a href="#work" className="group transition duration-300">
                  Work
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                </a>
              </li>
              <li className="float-right clear-both m-1 md:m-2 font-semibold tracking-wider">
                <a href="#resume" className="group transition duration-300">
                  Resume
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                </a>
              </li>
          </ul>
          :
          <></>
        }
      </nav>
    </header>
  );
};

export default Header;