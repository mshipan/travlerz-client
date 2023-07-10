import { Helmet } from "react-helmet-async";

const AddATestimonial = () => {
  return (
    <div className="my-16">
      <Helmet>
        <title>Add a Testimonial | Dashboard</title>
      </Helmet>
      <div className="bg-packageBg bg-no-repeat bg-cover bg-fixed bg-bottom w-full h-48 flex items-center justify-center ">
        <h1 className="packageBannerText font-barlow text-4xl font-bold text-white drop-shadow-2xl">
          Add a Testimonial
        </h1>
      </div>
    </div>
  );
};

export default AddATestimonial;
