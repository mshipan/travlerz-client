import PackageCard from "../Components/PackagePageComponent/PackageCard";
import { Helmet } from "react-helmet-async";
import { useGetAllPackagesQuery } from "../redux/features/api/baseApi";

const Packages = () => {
  const {
    data: allPackages,
    isLoading,
    isError,
    error,
  } = useGetAllPackagesQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div>
      <Helmet>
        <title>Packages | Travlerz</title>
      </Helmet>
      <div className="bg-bannerBg h-48 md:h-72 w-full bg-no-repeat bg-cover bg-bottom flex items-center justify-center">
        <h1 className="packageBannerText text-white font-barlow text-4xl font-bold">
          Tour Packages
        </h1>
      </div>
      <div className="my-20 w-3/5 mx-auto grid grid-cols-3 gap-5">
        {allPackages?.map((singlePackage) => (
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
