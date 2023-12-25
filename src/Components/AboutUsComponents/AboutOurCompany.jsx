import useBooking from "../../Hooks/useBooking";
import useDestination from "../../Hooks/useDestination";
import usePackage from "../../Hooks/usePackage";
import img1 from "../../assets/aboutus-1.jpg";
import img2 from "../../assets/aboutus-2.jpg";
import img3 from "../../assets/aboutus-3.jpg";

const AboutOurCompany = () => {
  const [packages] = usePackage();
  const [destinations] = useDestination();
  const [booking] = useBooking();
  return (
    <div className="container mx-auto my-20 px-2 md:px-0">
      <div className="flex flex-col md:flex-row items-center gap-5">
        <div className="flex flex-col items-center gap-5 md:gap-0">
          <img
            src={img1}
            alt="about us image"
            className="w-96 rounded-lg md:relative md:top-12"
          />
          <div className="flex flex-col md:flex-row items-center gap-5">
            <img src={img2} alt="about us image" className="w-96 rounded-lg" />
            <img src={img3} alt="about us image" className="w-96 rounded-lg" />
          </div>
        </div>
        <div className="max-w-2xl">
          <h1 className="text-3xl font-barlow font-bold mb-5 text-center md:text-left text-white">
            About Our Company and <span className="text-red-500">What We</span>{" "}
            Offer.
          </h1>
          <div className="flex flex-col md:grid md:grid-cols-1 justify-center gap-5 mb-5">
            <div className="flex items-center justify-center gap-5">
              <div className="flex flex-col items-center gap-1 p-5 hover:text-red-500 shadow-lg duration-300">
                <h1 className="font-barlow font-extrabold text-3xl text-white">
                  {packages.length}+
                </h1>
                <h5 className="font-barlow font-semibold md:text-lg text-slate-400">
                  Awesome Tour
                </h5>
              </div>
              <div className="flex flex-col items-center gap-1 p-5 hover:text-red-500 shadow-lg duration-300">
                <h1 className="font-barlow font-extrabold text-3xl text-white">
                  {destinations.length}+
                </h1>
                <h5 className="font-barlow font-semibold md:text-lg text-slate-400">
                  New Destinations
                </h5>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-fit flex flex-col items-center gap-1 p-5 hover:text-red-500 shadow-lg duration-300">
                <h1 className="font-barlow font-extrabold text-3xl text-white">
                  {booking.length}+
                </h1>
                <h5 className="font-barlow font-semibold md:text-lg text-slate-400">
                  Happy Clients
                </h5>
              </div>
            </div>
          </div>
          <p className="font-barlow text-center md:text-left text-white">
            Welcome to our company, where exceptional experiences await you. We
            pride ourselves on delivering top-notch services and creating
            unforgettable memories for our clients. With a diverse range of
            offerings, we cater to various travel preferences, including
            adventure, culture, and relaxation. Our expertly crafted
            itineraries, knowledgeable guides, and personalized service ensure a
            seamless and enriching journey. Trust us to provide you with
            exceptional travel experiences that exceed your expectations and
            leave you with lifelong memories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutOurCompany;
