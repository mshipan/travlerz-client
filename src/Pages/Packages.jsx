import { useLoaderData } from "react-router-dom";
import PackageCard from "../Components/PackagePageComponent/PackageCard";

const Packages = () => {
  const allPackages = useLoaderData();
  console.log("all packages", allPackages);
  return (
    <div>
      <div className="bg-bannerBg h-48 md:h-72 w-full bg-no-repeat bg-cover bg-bottom flex items-center justify-center">
        <h1 className="packageBannerText text-white font-barlow text-4xl font-bold">
          Tour Packages
        </h1>
      </div>
      <div className="my-20 w-3/5 mx-auto grid grid-cols-3 gap-5">
        {allPackages.map((singlePackage) => (
          <PackageCard
            key={singlePackage._id}
            singlePackage={singlePackage}
          ></PackageCard>
        ))}
      </div>
    </div>
  );
};

export default Packages;
