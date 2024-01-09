import { Helmet } from "react-helmet-async";
import DestinationCard from "../Components/DestinationPageComponent/DestinationCard";
import { useGetAllDestinationsQuery } from "../redux/features/api/baseApi";

const Destination = () => {
  const {
    data: allDestinations,
    isLoading,
    isError,
    error,
  } = useGetAllDestinationsQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <Helmet>
        <title>Destinations | Travlerz</title>
      </Helmet>
      <div className="bg-bannerBg h-48 md:h-72 w-full bg-no-repeat bg-cover bg-bottom flex items-center justify-center">
        <h1 className="packageBannerText text-white font-barlow text-4xl font-bold">
          Destinations
        </h1>
      </div>

      <div className="my-20 w-3/5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {allDestinations?.map((destination) => (
          <DestinationCard
            key={destination._id}
            destination={destination}
          ></DestinationCard>
        ))}
      </div>
    </div>
  );
};

export default Destination;
