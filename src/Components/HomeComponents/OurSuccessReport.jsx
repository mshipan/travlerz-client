import { BsGlobe2 } from "react-icons/bs";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { GiStarsStack } from "react-icons/gi";
import { LiaUsersSolid } from "react-icons/lia";
import usePackage from "../../Hooks/usePackage";
import useDestination from "../../Hooks/useDestination";
import useReview from "../../Hooks/useReview";
import useBooking from "../../Hooks/useBooking";
const OurSuccessReport = () => {
  const [packages] = usePackage();
  const [destinations] = useDestination();
  const [reviews] = useReview();
  const [booking] = useBooking();
  return (
    <div className="my-20 bg-ourSuccessReport bg-no-repeat bg-cover bg-bottom bg-fixed">
      <div className="bg-gray-500 bg-opacity-30 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 py-12">
          <div>
            <h1 className="font-barlow text-4xl font-bold text-white">
              Our Success Report
            </h1>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 md:gap-0 ">
              <p className="md:max-w-3xl text-sm font-barlow my-5 text-red-500">
                Experience the power of success with our comprehensive success
                reports. Gain valuable insights and analytics to measure your
                achievements and milestones. Our success reports provide a clear
                overview of your progress, empowering you to make informed
                decisions and drive further growth. Unlock your potential and
                celebrate your success with our detailed and concise reports.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col items-center gap-1 border border-red-500 p-5 hover:bg-gray-500 hover:bg-opacity-20 duration-500">
              <BsGlobe2 className="text-4xl text-red-500" />
              <h1 className="font-barlow font-extrabold text-3xl text-white">
                {packages.length}+
              </h1>
              <h5 className="font-barlow font-semibold md:text-lg text-white">
                Awesome Tour
              </h5>
            </div>
            <div className="flex flex-col items-center gap-1 border border-red-500 p-5 hover:bg-gray-500 hover:bg-opacity-20 duration-500">
              <LiaMapMarkedAltSolid className="text-4xl text-red-500" />
              <h1 className="font-barlow font-extrabold text-3xl text-white">
                {destinations.length}+
              </h1>
              <h5 className="font-barlow font-semibold md:text-lg text-white">
                New Destinations
              </h5>
            </div>
            <div className="flex flex-col items-center gap-1 border border-red-500 p-5 hover:bg-gray-500 hover:bg-opacity-20 duration-500">
              <GiStarsStack className="text-4xl text-red-500" />
              <h1 className="font-barlow font-extrabold text-3xl text-white">
                {reviews.length}+
              </h1>
              <h5 className="font-barlow font-semibold md:text-lg text-white">
                Good Reviews
              </h5>
            </div>
            <div className="flex flex-col items-center gap-1 border border-red-500 p-5 hover:bg-gray-500 hover:bg-opacity-20 duration-500">
              <LiaUsersSolid className="text-4xl text-red-500" />
              <h1 className="font-barlow font-extrabold text-3xl text-white">
                {booking.length}+
              </h1>
              <h5 className="font-barlow font-semibold md:text-lg text-white">
                Happy Clients
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSuccessReport;
