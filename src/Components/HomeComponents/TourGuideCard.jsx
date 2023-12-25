import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const TourGuideCard = ({ guide }) => {
  const {
    guideImage,
    instagramURL,
    facebookURL,
    twitterURL,
    whatsappURL,
    designation,
    name,
  } = guide;
  return (
    <div className="shadow-xl">
      <div className="relative overflow-hidden group">
        <div className="">
          <img
            src={guideImage}
            alt="Destination Image"
            className=" w-full h-72"
          />
        </div>

        <div className="absolute bottom-4 left-0 right-0 z-20 group-hover:-translate-y-3 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out transform-gpu flex items-center justify-center">
          <div className="w-2/3 flex items-center justify-center gap-5 bg-gray-500 p-1 rounded-lg">
            <Link to={instagramURL}>
              <div className="bg-white hover:bg-red-500 duration-500 w-7 h-7 rounded-full flex items-center justify-center">
                <FaInstagram className=" text-lg text-black hover:text-white" />
              </div>
            </Link>
            <Link to={facebookURL}>
              <div className="bg-white hover:bg-red-500 duration-500 w-7 h-7 rounded-full flex items-center justify-center">
                <FaFacebookF className=" text-lg text-black hover:text-white" />
              </div>
            </Link>
            <Link to={twitterURL}>
              <div className="bg-white hover:bg-red-500 duration-500 w-7 h-7 rounded-full flex items-center justify-center">
                <FaTwitter className=" text-lg text-black hover:text-white" />
              </div>
            </Link>

            <Link to={whatsappURL}>
              <div className="bg-white hover:bg-red-500 duration-500 w-7 h-7 rounded-full flex items-center justify-center">
                <FaWhatsapp className=" text-lg text-black hover:text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-3">
        <h1 className="text-lg font-barlow font-bold text-white">{name}</h1>
        <p className="font-barlow text-sm text-slate-400">{designation}</p>
      </div>
    </div>
  );
};

export default TourGuideCard;
