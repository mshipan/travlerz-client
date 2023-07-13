import { Link, NavLink, Outlet } from "react-router-dom";
import DashboardNav from "../Components/DashboardNav/DashboardNav";
import { BiMenu } from "react-icons/bi";
import logo from "../assets/travlerz-logo.png";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";

const DashboardLayout = () => {
  const { user, logOut } = useAuth();
  const [isSubOpen, setIsSubOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <>
      {/* drawer */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-3 bg-[#131D4E]">
        <div className="flex items-center gap-2">
          <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden">
            <BiMenu className="text-2xl text-white"></BiMenu>
          </label>
          <Link to="/">
            <img src={logo} alt="Website Logo" className="w-36" />
          </Link>
        </div>

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
                    isActive
                      ? " text-[#ff4838] navClass"
                      : "text-white navClass"
                  }
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/registration"
                  className={({ isActive }) =>
                    isActive
                      ? " text-[#ff4838] navClass"
                      : "text-white navClass"
                  }
                >
                  Registration
                </NavLink>
              </li>
            </ul>
          </>
        )}
      </div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Page content here */}

          <Outlet></Outlet>
        </div>
        <div className=" drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className=" p-0 w-80 h-full bg-[#131D4E] text-base-content">
            {/* Sidebar content here */}

            <DashboardNav></DashboardNav>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
