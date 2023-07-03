import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import ViewAllPackagesCard from "../../Components/DashboardComponents/ViewAllPackagesCard";
import "./DashboardPagesCss.css";
import { useState } from "react";

const ViewAllPackages = () => {
  const loadedPackages = useLoaderData();
  const [packages, setPackages] = useState(loadedPackages);
  console.log("packages", packages);
  return (
    <div className="mb-20">
      <Helmet>
        <title>View all Packages | Dashboard</title>
      </Helmet>
      <div className="bg-packageBg bg-no-repeat bg-cover bg-fixed bg-bottom w-full h-48 flex items-center justify-center ">
        <h1 className="packageBannerText font-barlow text-4xl font-bold text-white ">
          View all packages
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 container mx-auto my-10">
        {packages.map((singlePackage) => (
          <ViewAllPackagesCard
            key={singlePackage._id}
            singlePackage={singlePackage}
            packages={packages}
            setPackages={setPackages}
          ></ViewAllPackagesCard>
        ))}
      </div>
    </div>
  );
};

export default ViewAllPackages;
