import { NavLink } from "react-router-dom";

const DashboardNav = () => {
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
          All Packages
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
          to="add-a-destination"
          className={({ isActive }) =>
            isActive ? " text-[#ff4838] navClass" : "navClass"
          }
        >
          Add a Destination
        </NavLink>
      </li>
      <li>
        <NavLink
          to="view-destinations"
          className={({ isActive }) =>
            isActive ? " text-[#ff4838] navClass" : "navClass"
          }
        >
          All Destinations
        </NavLink>
      </li>
      <li>
        <NavLink
          to="view-bookings"
          className={({ isActive }) =>
            isActive ? " text-[#ff4838] navClass" : "navClass"
          }
        >
          All Bookings
        </NavLink>
      </li>
      <li>
        <NavLink
          to="ratings-and-reviews"
          className={({ isActive }) =>
            isActive ? " text-[#ff4838] navClass" : "navClass"
          }
        >
          Ratings and Reviews
        </NavLink>
      </li>
      <li>
        <NavLink
          to="ratings-and-reviews"
          className={({ isActive }) =>
            isActive ? " text-[#ff4838] navClass" : "navClass"
          }
        >
          User Inquiries
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="fixed top-0 left-0 right-0 bg-[#131D4E] flex items-center justify-center md:justify-start px-3 md:px-0 lg:px-0 xl:px-0 2xl:px-0 gap-5">
      <div>
        {/* large screen Nav */}
        <div className="hidden md:block lg:block xl:block 2xl:block mt-20 pl-7">
          <nav className="text-white">
            <ul className="flex flex-col items-start gap-7">
              {/* nav items goes here */}
              {navItems}
            </ul>
          </nav>
        </div>
        {/* small screen nav */}
        <div className=" flex flex-col justify-center items-center md:hidden lg:hidden xl:hidden 2xl:hidden w-full z-10 my-20">
          <nav className="text-white ">
            <ul className="bg-[#131D4E] w-full flex flex-col items-start  gap-7">
              {/* nav items goes here */}
              {navItems}
            </ul>
          </nav>
        </div>
      </div>
      {/* avatar */}
    </div>
  );
};

export default DashboardNav;
