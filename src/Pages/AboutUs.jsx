import { Helmet } from "react-helmet-async";
import AboutOurCompany from "../Components/AboutUsComponents/AboutOurCompany";
import ClientSay from "../Components/HomeComponents/ClientSay";
import TourGuide from "../Components/HomeComponents/TourGuide";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>About Us | Travlerz</title>
      </Helmet>
      <div className="bg-bannerBg h-48 md:h-72 w-full bg-no-repeat bg-cover bg-bottom flex items-center justify-center">
        <h1 className="packageBannerText text-white font-barlow text-4xl font-bold">
          About Us
        </h1>
      </div>
      <div>
        <AboutOurCompany />
        <ClientSay />
        <TourGuide />
      </div>
    </div>
  );
};

export default AboutUs;
