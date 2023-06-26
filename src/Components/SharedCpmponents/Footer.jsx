import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FiPhoneMissed } from "react-icons/fi";
import { IoMailOpenOutline } from "react-icons/io5";
import { PiMapPinLight } from "react-icons/pi";
import logo from "../../assets/travlerz-logo.png";
import img1 from "../../assets/footerImages/image1.jpg";
import img2 from "../../assets/footerImages/image2.jpg";
import img3 from "../../assets/footerImages/image3.jpg";
import img4 from "../../assets/footerImages/image4.jpg";
import img5 from "../../assets/footerImages/image5.jpg";
import img6 from "../../assets/footerImages/image6.jpg";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";

const Footer = () => {
  const [isHover, setIsHover] = useState(null);

  const handleMouseOver = (itemId) => {
    setIsHover(itemId);
  };

  const handleMouseOut = () => {
    setIsHover(null);
  };

  return (
    <div className="flex flex-col bg-footerBg bg-no-repeat bg-cover bg-bottom">
      <div className="bg-[#131D4E] bg-opacity-70 text-white font-barlow">
        <div className="container mx-auto flex flex-col">
          <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row md:justify-between lg:justify-between xl:justify-between 2xl:justify-between py-16">
            <div className="max-w-xs">
              <h1 className="text-xs text-justify mb-5">
                &quot;Travlerz&quot; – your ultimate travel planning companion.
                Explore, plan, and share your adventures with ease. Discover
                destinations, create itineraries, access travel tips, and
                connect with fellow travelers. Experience seamless
                mobile-friendly travel planning with Travlerz.
              </h1>
              <h1 className="text-lg font-bold mb-4">Follow Us On:</h1>
              <div className="flex flex-row gap-5">
                <Link
                  to="#"
                  className="bg-[#ff4838] w-7 h-7 flex items-center justify-center rounded-full hover:bg-transparent hover:border hover:border-[#ff4838] text-white hover:text-[#ff4838] duration-300"
                >
                  <FaInstagram />
                </Link>
                <Link
                  to="#"
                  className="bg-[#ff4838] w-7 h-7 flex items-center justify-center rounded-full hover:bg-transparent hover:border hover:border-[#ff4838] text-white hover:text-[#ff4838] duration-300"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  to="#"
                  className="bg-[#ff4838] w-7 h-7 flex items-center justify-center rounded-full hover:bg-transparent hover:border hover:border-[#ff4838] text-white hover:text-[#ff4838] duration-300"
                >
                  <FaTwitter />
                </Link>
              </div>
            </div>
            <div className="w-36">
              <h1 className="text-xl font-bold mb-3">Quick Link</h1>
              <ul className="flex flex-col gap-2">
                <li
                  onMouseOver={() => handleMouseOver("aboutUs")}
                  onMouseOut={handleMouseOut}
                  className={`${
                    isHover === "aboutUs"
                      ? "list-disc ml-5 duration-500 text-[#ff4838]"
                      : ""
                  }`}
                >
                  <Link to="#" className="text-white">
                    {" "}
                    About Us
                  </Link>
                </li>
                <li
                  onMouseOver={() => handleMouseOver("tourPackage")}
                  onMouseOut={handleMouseOut}
                  className={`${
                    isHover === "tourPackage"
                      ? "list-disc ml-5 duration-500 text-[#ff4838]"
                      : ""
                  }`}
                >
                  <Link to="#" className="text-white">
                    Tour Package
                  </Link>
                </li>
                <li
                  onMouseOver={() => handleMouseOver("destination")}
                  onMouseOut={handleMouseOut}
                  className={`${
                    isHover === "destination"
                      ? "list-disc ml-5 duration-500 text-[#ff4838]"
                      : ""
                  }`}
                >
                  <Link to="#" className="text-white">
                    Destination
                  </Link>
                </li>
                <li
                  onMouseOver={() => handleMouseOver("bookingProcess")}
                  onMouseOut={handleMouseOut}
                  className={`${
                    isHover === "bookingProcess"
                      ? "list-disc ml-5 duration-500 text-[#ff4838]"
                      : ""
                  }`}
                >
                  <Link to="#" className="text-white">
                    Booking Process
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-44">
              <h1 className="text-xl font-bold mb-3">Tour Type</h1>
              <ul className="flex flex-col gap-2">
                <li
                  onMouseOver={() => handleMouseOver("wildAdventure")}
                  onMouseOut={handleMouseOut}
                  className={`${
                    isHover === "wildAdventure"
                      ? "list-disc ml-5 duration-500 text-[#ff4838]"
                      : ""
                  }`}
                >
                  <Link to="#" className="text-white">
                    Wild & Adventure Tour
                  </Link>
                </li>
                <li
                  onMouseOver={() => handleMouseOver("groupTour")}
                  onMouseOut={handleMouseOut}
                  className={`${
                    isHover === "groupTour"
                      ? "list-disc ml-5 duration-500 text-[#ff4838]"
                      : ""
                  }`}
                >
                  <Link to="#" className="text-white">
                    Group Tour
                  </Link>
                </li>
                <li
                  onMouseOver={() => handleMouseOver("seasonalTour")}
                  onMouseOut={handleMouseOut}
                  className={`${
                    isHover === "seasonalTour"
                      ? "list-disc ml-5 duration-500 text-[#ff4838]"
                      : ""
                  }`}
                >
                  <Link to="#" className="text-white">
                    Seasonal Tour
                  </Link>
                </li>
                <li
                  onMouseOver={() => handleMouseOver("familyTour")}
                  onMouseOut={handleMouseOut}
                  className={`${
                    isHover === "familyTour"
                      ? "list-disc ml-5 duration-500 text-[#ff4838]"
                      : ""
                  }`}
                >
                  <Link to="#" className="text-white">
                    Family & Friendly Tour
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-xl font-bold mb-3 text-center">Gallery</h1>

              <div>
                <SlideshowLightbox className="grid grid-cols-3 gap-2">
                  <img
                    src={img1}
                    alt="Footer Gallery Image"
                    className="w-32 border-2 border-white"
                  />

                  <img
                    src={img2}
                    alt="Footer Gallery Image"
                    className="w-32 border-2 border-white"
                  />

                  <img
                    src={img3}
                    alt="Footer Gallery Image"
                    className="w-32 border-2 border-white"
                  />

                  <img
                    src={img4}
                    alt="Footer Gallery Image"
                    className="w-32 border-2 border-white"
                  />

                  <img
                    src={img5}
                    alt="Footer Gallery Image"
                    className="w-32 border-2 border-white"
                  />

                  <img
                    src={img6}
                    alt="Footer Gallery Image"
                    className="w-32 border-2 border-white"
                  />
                </SlideshowLightbox>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-white py-4">
            <h1 className="text-xl font-bold">Contact Us:</h1>
            <div className="flex items-center gap-1">
              <FiPhoneMissed />
              <p className="font-semibold">+88 01625 452286</p>
            </div>
            <div className="flex items-center gap-1">
              <IoMailOpenOutline />
              <p className="font-semibold">info@travlerz.com</p>
            </div>
            <div className="flex items-center gap-1">
              <PiMapPinLight />
              <p className="font-semibold">1216 Mirpur 2, Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
        <div className="bg-[#131D4E]">
          <div className="container mx-auto flex items-center justify-between py-5">
            <p>
              <small>Copyright 2023 Travlerz | Design By Shipan Mallik</small>
            </p>
            <div>
              <Link to="/">
                <img src={logo} alt="Website Logo" className="w-36" />
              </Link>
            </div>
            <div>
              <p>
                <span className="text-[#ff4838]">
                  <Link to="#" className="text-white">
                    Terms & Condition
                  </Link>{" "}
                  |{" "}
                  <Link to="#" className="text-white">
                    Privacy Policy
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
