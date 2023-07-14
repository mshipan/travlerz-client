import useDestination from "../../Hooks/useDestination";
import Marquee from "react-fast-marquee";
import ExploreDestinationCard from "./ExploreDestinationCard";
import { Link } from "react-router-dom";

const ExploreDestination = () => {
  const [destinations] = useDestination();

  return (
    <div className="my-20 px-4">
      <div className="container mx-auto">
        <h1 className="font-barlow text-2xl font-bold">
          Explore our Destinations
        </h1>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 md:gap-0 my-5">
          <p className="md:max-w-3xl text-sm font-barlow my-5">
            Explore our top destinations and indulge in unforgettable
            experiences. Immerse yourself in vibrant cultures, awe-inspiring
            landscapes, and iconic landmarks. From exotic beaches to majestic
            mountains, our top destinations offer a perfect blend of adventure
            and relaxation. Embark on a journey of discovery and create lifelong
            memories with us.
          </p>
          <Link to="/destinations">
            <button className="px-5 py-2 bg-red-500 hover:bg-white font-barlow font-semibold text-white hover:text-red-500 border border-red-500 duration-500">
              View all Destination
            </button>
          </Link>
        </div>
      </div>
      <div className="my-5 overflow-hidden">
        <Marquee>
          <div className="flex space-x-5 w-2/3">
            {destinations.map((destination) => (
              <ExploreDestinationCard
                key={destination._id}
                destination={destination}
              />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default ExploreDestination;
