import { SlideshowLightbox } from "lightbox.js-react";
import { Helmet } from "react-helmet-async";
import { BiMap } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useGetDestinationByIdQuery } from "../redux/features/api/baseApi";

const SingleDestination = () => {
  const { id } = useParams();
  const {
    data: singleDestination,
    isLoading,
    isError,
    error,
  } = useGetDestinationByIdQuery(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error}</p>;
  }
  const {
    title,
    banner,
    location,
    mapLink,
    destinationDescription,
    climateAndWeather,
    localCuisine,
    transportation,
    destinationGallery,
    attractions,
    travelTips,
    accommodation,
  } = singleDestination;
  return (
    <div>
      <Helmet>
        <title> Destination Details | Travlerz</title>
      </Helmet>
      <div className="bg-bannerBg h-48 md:h-72 w-full bg-no-repeat bg-cover bg-bottom flex items-center justify-center">
        <h1 className="packageBannerText text-white font-barlow text-4xl font-bold">
          Destination Details
        </h1>
      </div>
      <div className=" md:w-1/2 mx-auto my-20 px-5 md:px-0">
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
        </div>
        <div className="divider"></div>
        <div>
          <h1 className="text-2xl font-barlow font-bold mb-3 text-white">
            Destination Details
          </h1>
          <p className="font-barlow text-slate-400">{destinationDescription}</p>
        </div>

        <div className="my-10">
          <h1 className="text-2xl font-barlow font-bold mb-5 text-white">
            Destination Gallery
          </h1>
          <div>
            <SlideshowLightbox className="grid grid-cols-2 gap-2 ">
              {destinationGallery?.map((gallery, index) => (
                <img
                  key={index}
                  src={gallery.url}
                  alt="Destination Gallery Image"
                  className={`w-full border-2 border-white ${
                    index % 3 === 2 ? "col-span-2" : ""
                  } ${index > 2 ? "mt-2" : ""}`}
                />
              ))}
            </SlideshowLightbox>
          </div>
        </div>
        <div className="my-10">
          <h1 className="text-2xl font-barlow font-bold mb-5 text-white">
            Attractions
          </h1>
          <div>
            {attractions?.map((attraction, index) => (
              <ul key={index}>
                <li className="text-slate-400">
                  {index + 1}. {attraction.attraction}
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="my-10">
          <h1 className="text-2xl font-barlow font-bold mb-5 text-white">
            Accommodation
          </h1>
          <div>
            {accommodation?.map((ac, index) => (
              <ul key={index}>
                <li className="text-slate-400">
                  {index + 1}. {ac.accommodation}
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="mb-10">
          <h1 className="text-2xl font-barlow font-bold mb-3 text-white">
            Climate And Weather Details
          </h1>
          <p className="font-barlow text-slate-400">{climateAndWeather}</p>
        </div>
        <div className="mb-10">
          <h1 className="text-2xl font-barlow font-bold mb-3 text-white">
            Local Cuisine
          </h1>
          <p className="font-barlow text-slate-400">{localCuisine}</p>
        </div>
        <div className="my-10">
          <h1 className="text-2xl font-barlow font-bold mb-5 text-white">
            Travel Tips
          </h1>
          <div>
            {travelTips?.map((travelTip, index) => (
              <ul key={index}>
                <li className="text-slate-400">
                  {index + 1}. {travelTip.travelTips}
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="mb-10">
          <h1 className="text-2xl font-barlow font-bold mb-3 text-white">
            Transportation
          </h1>
          <p className="font-barlow text-slate-400">{transportation}</p>
        </div>
        <div className="mb-10">
          <h1 className="text-2xl font-barlow font-bold mb-10">
            Destination Map
          </h1>

          <iframe
            title="Map"
            src={mapLink}
            className="w-full h-72 md:h-96"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SingleDestination;
