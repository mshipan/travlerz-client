import { Helmet } from "react-helmet-async";
import ContactInfo from "../Components/ContactUsComponents/ContactInfo";
import Map from "../Components/ContactUsComponents/Map";
import ContactForm from "../Components/ContactUsComponents/ContactForm";

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us | Travlerz</title>
      </Helmet>

      <div className="bg-bannerBg h-48 md:h-72 w-full bg-no-repeat bg-cover bg-bottom flex items-center justify-center">
        <h1 className="packageBannerText text-white font-barlow text-4xl font-bold">
          Contact Us
        </h1>
      </div>
      <div className="my-20">
        <ContactInfo />
        <Map />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
