import { useParams } from "react-router-dom";
import { BiMap } from "react-icons/bi";
import { Helmet } from "react-helmet-async";
import { BsClockHistory, BsCheck2 } from "react-icons/bs";
import { LuFootprints } from "react-icons/lu";
import { MdGroups } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { HiMiniCurrencyBangladeshi } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import { SlideshowLightbox } from "lightbox.js-react";
import { useGetPackageByIdQuery } from "../../redux/features/api/baseApi";

const ViewSinglePackage = () => {
  const { id } = useParams();

  const {
    data: singlePackage,
    isLoading,
    isError,
    error,
  } = useGetPackageByIdQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading package: {error.message}</div>;
  }

  if (!singlePackage) {
    return <div>Package not found</div>;
  }

  const {
    banner,
    location,
    title,
    packageDetails,
    duration,
    tourType,
    groupSize,
    tourGuide,
    packagePricePerPerson,
    destination,
    departure,
    departureTime,
    returnTime,
    included,
    excluded,
    tourGallery,
  } = singlePackage;

  return (
    <div className="my-16">
      <Helmet>
        <title> Package Details | Dashboard</title>
      </Helmet>
      <div className="bg-packageBg bg-no-repeat bg-cover bg-fixed bg-bottom w-full h-48 flex items-center justify-center ">
        <h1 className="packageBannerText font-barlow text-4xl font-bold text-white ">
          Package Details
        </h1>
      </div>
      <div className=" md:w-1/2 mx-auto my-20 px-5 md:px-0">
        <div className="grid grid-cols-2 md:grid-cols-5 justify-items-stretch gap-3 my-5">
          <div className="flex items-center gap-3">
            <BsClockHistory className="text-3xl text-red-500" />
            <div className="font-barlow">
              <p className="leading-none text-base font-medium text-white">
                Duration
              </p>
              <p className="leading-none mt-1 text-slate-400">
                <small>{duration}</small>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <LuFootprints className="text-3xl text-red-500" />
            <div className="font-barlow">
              <p className="leading-none text-base font-medium text-white">
                Tour Types
              </p>
              <p className="leading-none mt-1 text-slate-400">
                <small>{tourType}</small>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MdGroups className="text-3xl text-red-500" />
            <div className="font-barlow">
              <p className="leading-none text-base font-medium text-white">
                Group Size
              </p>
              <p className="leading-none mt-1 text-slate-400">
                <small>{groupSize} People</small>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <GoPeople className="text-3xl text-red-500" />
            <div className="font-barlow">
              <p className="leading-none text-base font-medium text-white">
                Tour Guide
              </p>
              <p className="leading-none mt-1 text-slate-400">
                <small>{tourGuide} People</small>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <HiMiniCurrencyBangladeshi className="text-3xl text-red-500" />
            <div className="font-barlow">
              <p className="leading-none text-base font-medium text-white">
                Price
              </p>
              <p className="leading-none mt-1 text-slate-400">
                <small>{packagePricePerPerson} Tk / Person</small>
              </p>
            </div>
          </div>
        </div>
        <img src={banner} alt="Package Banner" className="w-full rounded-lg" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-5 gap-5">
          <div>
            <p className="inline-flex items-center md:text-lg text-red-500 font-thin">
              <BiMap />{" "}
              <span className="font-barlow font-bold">{location}</span>
            </p>
            <h1 className="text-xl md:text-3xl font-bold font-barlow text-white">
              {title}
            </h1>
          </div>
          {/* <div>
            <button className="bg-red-500 hover:bg-white px-5 py-2 text-white hover:text-red-500 border border-red-500 duration-500 text-lg font-medium font-barlow">
              Book this Tour
            </button>
          </div> */}
        </div>
        <div className="divider"></div>
        <div>
          <h1 className="text-2xl font-barlow font-bold text-white mb-3">
            Package Details
          </h1>
          <p className="font-barlow text-slate-400">{packageDetails}</p>
        </div>
        <div className="shadow-lg my-5">
          <table className="table border border-black">
            <tbody>
              <tr className="border border-black">
                <td className="font-barlow font-bold border border-black text-white">
                  Destination
                </td>
                <td className="text-slate-400">{destination}</td>
              </tr>
              <tr className="border border-black">
                <td className="font-barlow font-bold border border-black text-white">
                  Departure
                </td>
                <td className="text-slate-400">
                  {new Date(departure).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </td>
              </tr>
              <tr className="border border-black">
                <td className="font-barlow font-bold border border-black text-white">
                  Departure Time
                </td>
                <td className="text-slate-400">{departureTime}</td>
              </tr>
              <tr className="border border-black">
                <td className="font-barlow font-bold border border-black text-white">
                  Return Time
                </td>
                <td className="text-slate-400">{returnTime}</td>
              </tr>
              <tr className="border border-black">
                <td className="font-barlow font-bold border border-black text-white">
                  Included
                </td>
                <td className="text-slate-400">
                  {included?.map((incld, index) => (
                    <div key={index}>
                      <div className="inline-flex items-center gap-1">
                        <BsCheck2 className="text-sky-500" /> {incld}
                      </div>
                    </div>
                  ))}
                </td>
              </tr>
              <tr className="border border-black">
                <td className="font-barlow font-bold border border-black text-white">
                  Excluded
                </td>
                <td className="text-slate-400">
                  {excluded?.map((incld, index) => (
                    <div key={index}>
                      <div className="inline-flex items-center gap-1">
                        <LiaTimesSolid className="text-red-500" /> {incld}
                      </div>
                    </div>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="my-10">
          <h1 className="text-2xl font-barlow font-bold text-white mb-5">
            Tour Gallery
          </h1>
          <div>
            <SlideshowLightbox className="grid grid-cols-2 gap-2 ">
              {tourGallery?.map((gallery, index) => (
                <img
                  key={index}
                  src={gallery.url}
                  alt="Package Gallery Image"
                  className={`w-full border-2 border-white ${
                    index % 3 === 2 ? "col-span-2" : ""
                  } ${index > 2 ? "mt-2" : ""}`}
                />
              ))}
            </SlideshowLightbox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSinglePackage;
