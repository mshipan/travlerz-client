import { Helmet } from "react-helmet-async";
import ViewAllDestinationCard from "../../Components/DashboardComponents/ViewAllDestinationCard";
import { useGetAllDestinationsQuery } from "../../redux/features/api/baseApi";

const ViewAllDestination = () => {
  // const loadedDestinations = useLoaderData();
  const {
    data: destinations,
    isLoading,
    isError,
    error,
  } = useGetAllDestinationsQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading package: {error.message}</div>;
  }

  if (!destinations) {
    return <div>Package not found</div>;
  }
  // const [destinations, setDestinations] = useState(loadedDestinations);
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
        {destinations?.map((destination) => (
          <ViewAllDestinationCard
            key={destination._id}
            destination={destination}
            destinations={destinations}
            // setDestinations={setDestinations}
          ></ViewAllDestinationCard>
        ))}
      </div>
    </div>
  );
};

export default ViewAllDestination;
