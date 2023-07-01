import { useLoaderData } from "react-router-dom";
import { BiMap } from "react-icons/bi";
import { Helmet } from "react-helmet-async";

const ViewSinglePackage = () => {
  const singlePackage = useLoaderData();
  const { banner, location, title, packageDetails } = singlePackage;
  return (
    <div>
      <Helmet>
        <title> Package Details | Dashboard</title>
      </Helmet>
      <div className="bg-packageBg bg-no-repeat bg-cover bg-fixed bg-bottom w-full h-48 flex items-center justify-center ">
        <h1 className="packageBannerText font-barlow text-4xl font-bold text-white ">
          Package Details
        </h1>
      </div>
      <div className="md:w-1/2 mx-auto my-20 px-5 md:px-0">
        <img src={banner} alt="Package Banner" className="w-full rounded-lg" />
        <div className="mt-5">
          <p className="inline-flex items-center md:text-lg text-red-500 font-thin">
            <BiMap /> <span className="font-barlow font-bold">{location}</span>
          </p>
          <h1 className="text-xl md:text-3xl font-bold font-barlow">{title}</h1>
        </div>
        <div className="divider"></div>
        <div>
          <h1 className="text-2xl font-barlow font-bold mb-3">
            Package Details
          </h1>
          <p className="font-barlow">{packageDetails}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewSinglePackage;
