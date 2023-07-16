import useGuide from "../../Hooks/useGuide";
import TourGuideCard from "./TourGuideCard";

const TourGuide = () => {
  const [, guides, loading] = useGuide();
  if (loading) {
    return <p>Loading guides...</p>;
  }
  return (
    <div className="container mx-auto my-20 px-2 md:px-0">
      <div className="flex flex-col items-center gap-5 mb-10">
        <h1 className="font-barlow font-bold text-3xl">Our Tour Guide</h1>
        <p className="font-barlow max-w-6xl text-center">
          Experience the difference of a knowledgeable and friendly tour guide.
          Our guides are passionate experts who will bring your journey to life,
          providing fascinating insights and local perspectives. With their
          expertise and attention to detail, they ensure a seamless and
          enriching travel experience. Discover hidden gems, engage with local
          culture, and make the most of your adventure with our exceptional tour
          guides.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:w-[73%] mx-auto">
        {guides.slice(0, 6).map((guide) => (
          <TourGuideCard key={guide._id} guide={guide}></TourGuideCard>
        ))}
      </div>
    </div>
  );
};

export default TourGuide;
