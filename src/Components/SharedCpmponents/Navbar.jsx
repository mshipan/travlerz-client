import { NavLink } from "react-router-dom";
import logo from "../../assets/travlerz-logo.png";
import { HiMenu } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? " text-[#ff4838] navClass" : "navClass"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/destinations"
          className={({ isActive }) =>
            isActive ? " text-[#ff4838] navClass" : "navClass"
          }
        >
          Destinations
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            isActive ? " text-[#ff4838] navClass" : "navClass"
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            isActive ? " text-[#ff4838] navClass" : "navClass"
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-[#131D4E] flex items-start px-3 md:px-0 lg:px-0 xl:px-0 2xl:px-0">
      <div className="container mx-auto py-2 flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-start md:items-center justify-between">
        <div>
          <img src={logo} alt="Website Logo" className="w-36" />
        </div>
        {/* large screen Nav */}
        <div className="hidden md:block lg:block xl:block 2xl:block">
          <nav className="text-white">
            <ul className="flex items-center gap-7">
              {/* nav items goes here */}
              {navItems}
            </ul>
          </nav>
        </div>
        {/* small screen nav */}
        <div className="block md:hidden lg:hidden xl:hidden 2xl:hidden w-full z-10">
          <nav className="text-white -ml-3">
            <ul
              className={`bg-[#131D4E] absolute w-full flex flex-col items-start pl-12 pb-5 gap-3 duration-500 ${
                isOpen ? "top-12" : "-top-64"
              }`}
            >
              {/* nav items goes here */}
              {navItems}
            </ul>
          </nav>
        </div>
      </div>
      <div
        className=" block md:hidden lg:hidden xl:hidden 2xl:hidden text-white text-2xl py-3 transform hover:rotate-180 transition duration-300 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen === true ? <FaXmark /> : <HiMenu />}
      </div>
    </div>
  );
};

export default Navbar;
