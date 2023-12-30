import { Helmet } from "react-helmet-async";
import ViewAllPackagesCard from "../../Components/DashboardComponents/ViewAllPackagesCard";
import "./DashboardPagesCss.css";
import { useGetAllPackagesQuery } from "../../redux/features/api/baseApi";

const ViewAllPackages = () => {
  const {
    data: allPackages,
    isLoading,
    isError,
    error,
  } = useGetAllPackagesQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading package: {error.message}</div>;
  }

  if (!allPackages) {
    return <div>Package not found</div>;
  }

  return (
    <div className="my-16">
      <Helmet>
        <title>View all Packages | Dashboard</title>
      </Helmet>
      <div className="bg-packageBg bg-no-repeat bg-cover bg-fixed bg-bottom w-full h-48 flex items-center justify-center ">
        <h1 className="packageBannerText font-barlow text-4xl font-bold text-white ">
          View all packages
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 container mx-auto my-10">
        {allPackages?.map((singlePackage) => (
          <ViewAllPackagesCard
            key={singlePackage._id}
            singlePackage={singlePackage}
          ></ViewAllPackagesCard>
        ))}
      </div>
    </div>
  );
};

export default ViewAllPackages;
