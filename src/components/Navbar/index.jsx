import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logotipo from "../utils/Logotipo";
import MenuData from "../../data/MenuData";

import "./styles.scss";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleButton = () => setToggleMenu(!toggleMenu);

  return (
    <header className="navbar sticky z-10 -top-0 shadow-box-md flex items-center lg:justify-between ">
      <div className=" w-full lg:max-w-screen-lg lg:m-auto xl:max-w-screen-xl flex flex-wrap lg:flex-nowrap items-center justify-between lg:h-14 ">
        <div className="l-container lg:m-0 lg:w-auto flex items-center justify-between py-2 lg:py-0">
          <Logotipo />
          <button className="btn-menu lg:hidden" onClick={handleToggleButton}>
            <span className={`icon-bar ${toggleMenu && "animate-bar"}`}></span>
          </button>
        </div>

        <nav
          className={`absolute lg:static lg:scale-y-100 top-12 lg:top-0 lg:shadow-none transform scale-y-0 origin-top transition-transform duration-300 py-2 lg:py-0 shadow-box-md w-full lg:w-auto flex flex-col lg:flex-row lg:justify-end items-center lg:gap-8 text-c-first-darker ease-in-out bg-c-accent-lighter lg:bg-transparent ${
            toggleMenu ? "scale-y-100" : ""
          }`}
        >
          {MenuData.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              exact={item.exact}
              activeClassName="text-c-first-lighter-100 bg-c-accent-darker"
              className="px-3 py-1 lg-py-0 rounded-md"
              onClick={handleToggleButton}
            >
              <span className="f-first text-fp-small uppercase transition-hover duration-300 hover:text-c-first-lighter-200 inline-block">
                {item.title}
              </span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
