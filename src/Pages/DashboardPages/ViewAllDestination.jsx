import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import ViewAllDestinationCard from "../../Components/DashboardComponents/ViewAllDestinationCard";

const ViewAllDestination = () => {
  const loadedDestinations = useLoaderData();
  const [destinations, setDestinations] = useState(loadedDestinations);
  return (
    <div className="my-16">
      <Helmet>
        <title>View all Destinations | Dashboard</title>
      </Helmet>
      <div className="bg-packageBg bg-no-repeat bg-cover bg-fixed bg-bottom w-full h-48 flex items-center justify-center ">
        <h1 className="packageBannerText font-barlow text-4xl font-bold text-white ">
          View all Destinations
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 container mx-auto my-10">
        {destinations.map((destination) => (
          <ViewAllDestinationCard
            key={destination._id}
            destination={destination}
            destinations={destinations}
            setDestinations={setDestinations}
          ></ViewAllDestinationCard>
        ))}
      </div>
    </div>
  );
};

export default ViewAllDestination;
