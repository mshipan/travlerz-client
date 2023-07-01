import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/travlerz-logo.png";
import { HiMenu } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
const DashboardNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubOpen, setIsSubOpen] = useState(false);
  const navItems = (
    <>
      <li>
        <NavLink
          to="add-a-package"
          className={({ isActive }) =>
            isActive ? " text-[#ff4838] navClass" : "navClass"
          }
        >
          Add a Package
        </NavLink>
      </li>
      <li>
        <NavLink
          to="view-packages"
          className={({ isActive }) =>
            isActive ? " text-[#ff4838] navClass" : "navClass"
          }
        >
          View Packages
        </NavLink>
      </li>
      <li>
        <NavLink
          to="all-users"
          className={({ isActive }) =>
            isActive ? " text-[#ff4838] navClass" : "navClass"
          }
        >
          All Users
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

  const { user, logOut } = useAuth();

  const handleToggle = () => {
    setIsOpen((prevState) => {
      setIsSubOpen(false); // Set isSubOpen to false when isOpen is toggled
      return !prevState;
    });
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-[#131D4E] sticky top-0 z-50 flex items-center px-3 md:px-0 lg:px-0 xl:px-0 2xl:px-0 gap-5">
      <div className="container mx-auto py-2 flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-start md:items-center justify-between">
        <div>
          <Link to="/">
            <img src={logo} alt="Website Logo" className="w-36" />
          </Link>
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
      {/* avatar */}
      {user ? (
        <>
          <div className="md:mr-5">
            <div onClick={() => setIsSubOpen(!isSubOpen)}>
              <img
                src={user?.photoURL}
                className="w-10 rounded-full cursor-pointer"
                alt=""
              />
            </div>
            <nav className="z-40 text-white -ml-20">
              <ul
                className={`bg-[#131D4E] absolute flex flex-col items-start pl-3 pr-8 pb-5 gap-3 duration-500 z-40 ${
                  isSubOpen ? "top-12 md:top-[3.25rem]" : "-top-64"
                }`}
              >
                <li>
                  <NavLink
                    to="my-profile"
                    className={({ isActive }) =>
                      isActive ? " text-[#ff4838] navClass" : "navClass"
                    }
                  >
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="font-barlow font-semibold hover:text-[#ff4838] duration-300"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </>
      ) : (
        <>
          <ul className="flex gap-7 md:mr-5">
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? " text-[#ff4838] navClass" : "text-white navClass"
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/registration"
                className={({ isActive }) =>
                  isActive ? " text-[#ff4838] navClass" : "text-white navClass"
                }
              >
                Registration
              </NavLink>
            </li>
          </ul>
        </>
      )}

      <div
        className=" block md:hidden lg:hidden xl:hidden 2xl:hidden text-white text-2xl py-3 transform hover:rotate-180 transition duration-300 cursor-pointer"
        onClick={handleToggle}
      >
        {isOpen === true ? <FaXmark /> : <HiMenu />}
      </div>
    </div>
  );
};

export default DashboardNav;
