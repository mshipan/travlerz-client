import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useAddGuideMutation } from "../../redux/features/api/baseApi";

const AddAGuide = () => {
  const { register, handleSubmit, reset } = useForm();
  const [addGuide] = useAddGuideMutation();
  const onSubmit = async (data) => {
    try {
      const result = await addGuide(data);

      if (result.data) {
        Swal.fire({
          title: "Guide Added Successfully!",
          text: "Press OK to continue",
          icon: "success",
          confirmButtonText: "OK",
        });
        reset();
      } else {
        Swal.fire({
          title: "Guide Added Failed!",
          text: "Press OK to continue",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("An unexpected error occurred", error);
    }
  };
  return (
    <div className="my-16">
      <Helmet>
        <title>Add a Guide | Dashboard</title>
      </Helmet>
      <div className="bg-packageBg bg-no-repeat bg-cover bg-fixed bg-bottom w-full h-48 flex items-center justify-center ">
        <h1 className="packageBannerText font-barlow text-4xl font-bold text-white drop-shadow-2xl">
          Add a Guide
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 md:gap-8 px-5 my-10"
      >
        <div className="flex flex-col md:flex-row justify-center md:gap-8 w-full ">
          <div className="w-full md:w-1/2 flex flex-col md:gap-3">
            <div className="form-control">
              <label
                htmlFor="name"
                className="font-barlow font-semibold text-white"
              >
                Guide Name :{" "}
              </label>
              <input
                type="text"
                name="name"
                placeholder=" Guide Name"
                className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                {...register("name")}
              />
            </div>
            <div className="form-control">
              <label
                htmlFor="guideImage"
                className="font-barlow font-semibold text-white"
              >
                Guide Image URL :{" "}
              </label>
              <input
                type="text"
                name="guideImage"
                placeholder=" Guide Image URL"
                className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                {...register("guideImage")}
              />
            </div>
            <div className="form-control">
              <label
                htmlFor="facebookURL"
                className="font-barlow font-semibold text-white"
              >
                Facebook URL :{" "}
              </label>
              <input
                type="text"
                name="facebookURL"
                placeholder=" Facebook URL"
                className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                {...register("facebookURL")}
              />
            </div>
            <div className="form-control">
              <label
                htmlFor="instagramURL"
                className="font-barlow font-semibold text-white"
              >
                Instagram URL :{" "}
              </label>
              <input
                type="text"
                name="instagramURL"
                placeholder=" Instagram URL"
                className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                {...register("instagramURL")}
              />
            </div>
            <div className="form-control">
              <label
                htmlFor="twitterURL"
                className="font-barlow font-semibold text-white"
              >
                Twitter URL :{" "}
              </label>
              <input
                type="text"
                name="twitterURL"
                placeholder=" Twitter URL"
                className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                {...register("twitterURL")}
              />
            </div>
            <div className="form-control">
              <label
                htmlFor="whatsappURL"
                className="font-barlow font-semibold text-white"
              >
                What&apos;s App URL :{" "}
              </label>
              <input
                type="text"
                name="whatsappURL"
                placeholder=" Whatsapp URL"
                className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                {...register("whatsappURL")}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <input
            type="submit"
            value="Add Guide"
            className="px-5 py-2 border border-[#131D4E] bg-[#131D4E] hover:bg-white text-white hover:text-[#131D4E] duration-500 font-barlow font-bold cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default AddAGuide;
