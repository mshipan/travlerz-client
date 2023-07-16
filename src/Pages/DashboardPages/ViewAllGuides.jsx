import { Helmet } from "react-helmet-async";
import useGuide from "../../Hooks/useGuide";
import AllGuidesCard from "../../Components/DashboardComponents/AllGuidesCard";

const ViewAllGuides = () => {
  const [, guides, loading] = useGuide();
  if (loading) {
    return <p>Loading guides...</p>;
  }
  return (
    <div className="my-16">
      <Helmet>
        <title>View all Guides | Dashboard</title>
      </Helmet>
      <div className="bg-packageBg bg-no-repeat bg-cover bg-fixed bg-bottom w-full h-48 flex items-center justify-center ">
        <h1 className="packageBannerText font-barlow text-4xl font-bold text-white drop-shadow-2xl">
          View all Guides
        </h1>
      </div>
      <div className="my-10 md:my-20 w-4/5 md:w-3/5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {guides.map((guide) => (
          <AllGuidesCard key={guide._id} guide={guide}></AllGuidesCard>
        ))}
      </div>
    </div>
  );
};

export default ViewAllGuides;
