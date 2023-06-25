import { FaPhone, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { Link } from "react-router-dom";
const TopInfo = () => {
  return (
    <div className="bg-[#4942E4]">
      <div className="container mx-auto flex items-center justify-between py-2">
        <div className=" text-xs text-white flex items-center gap-4">
          <div className="flex items-center gap-1">
            <FaPhone className="transform rotate-12" />
            <p>+88 01625 452286</p>
          </div>
          <div className="flex items-center gap-1">
            <MdMail />
            <p>info@travlerz.com</p>
          </div>
        </div>
        <div className="text-base text-white flex items-center gap-4">
          <Link to="#">
            <FaFacebookF title="facebook" />
          </Link>
          <Link to="#">
            <FaInstagram title="instagram" />
          </Link>
          <Link to="#">
            <FaTwitter title="twitter" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopInfo;
