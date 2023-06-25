import { NavLink } from "react-router-dom";
import logo from "../../assets/travlerz-logo.png";

const Navbar = () => {
  return (
    <div className="bg-[#131D4E]">
      <div className="container mx-auto py-2 flex items-center justify-between">
        <div>
          <img src={logo} alt="Website Logo" className="w-36" />
        </div>

        <div>
          <nav className="text-white">
            <ul className="flex items-center gap-7">
              <li>
                <NavLink
                  to="/"
                  className="hover:text-[#ff4838] font-barlow font-semibold"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/destinations">Destinations</NavLink>
              </li>
              <li>
                <NavLink to="/about-us">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/contact-us">Contact Us</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
