import { useGetAllPackagesQuery } from "../../redux/features/api/baseApi";

const OurGallery = () => {
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
    <div className="px-2 md:px-0 mb-20">
      <div className="flex flex-col items-center">
        <h1 className="font-barlow text-4xl font-bold text-white">
          Our Gallery
        </h1>
        <p className="md:max-w-3xl text-sm font-barlow my-5 text-center text-slate-400">
          Immerse yourself in the beauty of our captivating gallery. Browse
          through a stunning collection of images that showcase breathtaking
          landscapes, vibrant cultures, and memorable moments. Get inspired and
          let your imagination wander as you explore our carefully curated
          gallery. Indulge in visual storytelling and discover the world through
          our captivating images.
        </p>
      </div>
      <div className="md:w-3/5 mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {allPackages.slice(0, 6).map((myPackage, index) => (
            <img
              key={index}
              src={myPackage.tourGallery[3].url}
              alt="Gallery Images"
              className="md:h-56 w-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurGallery;
