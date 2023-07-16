import { Link } from "react-router-dom";
import usePackage from "../../Hooks/usePackage";
import PopularPackageCard from "./PopularPackageCard";

const PopularPackage = () => {
  const [packages] = usePackage();

  const popularCategory = "popular";
  const popularPackages = packages.filter(
    (myPackage) => myPackage.category === popularCategory
  );

  return (
    <div className="container mx-auto my-20 px-4">
      <div>
        <h1 className="font-barlow text-2xl font-bold">Our Popular Packages</h1>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-0 mb-5">
          <p className="md:max-w-3xl text-sm font-barlow my-5">
            Discover unforgettable travel experiences with Travlerz! Our popular
            tour packages cater to diverse interests, offering thrilling
            adventures, cultural immersions, and tranquil retreats. Explore
            stunning destinations, expertly designed itineraries, and
            personalized service for a journey of a lifetime.
          </p>
          <Link to="/packages">
            <button className="px-5 py-2 bg-red-500 hover:bg-white font-barlow font-semibold text-white hover:text-red-500 border border-red-500 duration-500">
              View all Tour
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-5 md:gap-10">
        {popularPackages.map((newPackage) => (
          <PopularPackageCard
            key={newPackage._id}
            newPackage={newPackage}
          ></PopularPackageCard>
        ))}
      </div>
    </div>
  );
};

export default PopularPackage;
