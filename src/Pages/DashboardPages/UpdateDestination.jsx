import { Helmet } from "react-helmet-async";
import { useFieldArray, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useGetDestinationByIdQuery,
  useUpdateDestinationMutation,
} from "../../redux/features/api/baseApi";
import { FaXmark } from "react-icons/fa6";
import { BsPlus } from "react-icons/bs";

const UpdateDestination = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, control, handleSubmit } = useForm();
  const { append: appendDestinationGallery, remove: removeDestinationGallery } =
    useFieldArray({
      control,
      name: "destinationGallery",
    });

  const { append: appendAttractions, remove: removeAttractions } =
    useFieldArray({
      control,
      name: "attractions",
    });

  const { append: appendTravelTips, remove: removeTravelTips } = useFieldArray({
    control,
    name: "travelTips",
  });
  const { append: appendAccommodation, remove: removeAccommodation } =
    useFieldArray({
      control,
      name: "accommodation",
    });
  const [updateDestination] = useUpdateDestinationMutation();
  const {
    data: singleDestination,
    isLoading,
    isError,
    error,
  } = useGetDestinationByIdQuery(id);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading destination: {error.message}</div>;
  }

  if (!singleDestination) {
    return <div>Destination not found</div>;
  }

  const {
    _id,
    title,
    banner,
    location,
    mapLink,
    destinationDescription,
    climateAndWeather,
    localCuisine,
    transportation,
    destinationGallery,
    attractions,
    travelTips,
    accommodation,
  } = singleDestination;

  const onSubmit = async (data) => {
    try {
      const result = await updateDestination({
        id: id,
        data: data,
      });

      if (result.data.modifiedCount > 0) {
        Swal.fire({
          title: `${title} Updated Successfully!`,
          text: "Press OK to continue",
          icon: "success",
          confirmButtonText: "OK",
        });

        navigate(`/dashboard/destination/${_id}`);
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: `Error Updating ${title}: ${error}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div className="my-16">
      <Helmet>
        <title>Update Destination | Dashboard</title>
      </Helmet>
      <div className="bg-packageBg bg-no-repeat bg-cover bg-fixed bg-bottom w-full h-48 flex items-center justify-center ">
        <h1 className="packageBannerText font-barlow text-4xl font-bold text-white drop-shadow-2xl">
          Update Destination
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
                htmlFor="title"
                className="font-barlow font-semibold text-white"
              >
                Destination Title :{" "}
              </label>
              <input
                type="text"
                name="title"
                placeholder=" Destination Title"
                className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                defaultValue={title}
                {...register("title")}
              />
            </div>
            <div className="form-control">
              <label
                htmlFor="banner"
                className="font-barlow font-semibold text-white"
              >
                Banner Image URL :{" "}
              </label>
              <input
                type="text"
                name="banner"
                placeholder=" Banner URL"
                className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                defaultValue={banner}
                {...register("banner")}
              />
            </div>
            <div className="form-control">
              <label
                htmlFor="location"
                className="font-barlow font-semibold text-white"
              >
                Location :{" "}
              </label>
              <input
                type="text"
                name="location"
                placeholder=" Location"
                className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                defaultValue={location}
                {...register("location")}
              />
            </div>
            <div className="form-control">
              <label
                htmlFor="duration"
                className="font-barlow font-semibold text-white"
              >
                Map Link :{" "}
              </label>
              <input
                type="text"
                name="mapLink"
                placeholder=" Destination Map Link"
                className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                defaultValue={mapLink}
                {...register("mapLink")}
              />
            </div>
            <div className="form-control">
              <label
                htmlFor="packageDetails"
                className="font-barlow font-semibold text-white"
              >
                Destination Description :{" "}
              </label>
              <textarea
                name="destinationDescription"
                placeholder=" Destination Description..."
                className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                defaultValue={destinationDescription}
                {...register("destinationDescription")}
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="form-control">
              <label
                htmlFor="climateAndWeather"
                className="font-barlow font-semibold text-white"
              >
                Climate & Weather Description :{" "}
              </label>
              <textarea
                name="climateAndWeather"
                placeholder=" Climate & Weather Description..."
                className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                defaultValue={climateAndWeather}
                {...register("climateAndWeather")}
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>
          {/* middle */}
          <div className="w-full md:w-1/2 flex flex-col md:gap-3">
            <div className="form-control">
              <label
                htmlFor="localCuisine"
                className="font-barlow font-semibold text-white"
              >
                Local Cuisine Description :{" "}
              </label>
              <textarea
                name="localCuisine"
                placeholder=" Local Cuisine Description..."
                className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                defaultValue={localCuisine}
                {...register("localCuisine")}
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="form-control">
              <label
                htmlFor="transportation"
                className="font-barlow font-semibold text-white"
              >
                Transportation Description :{" "}
              </label>
              <textarea
                name="transportation"
                placeholder=" Transportation Description..."
                className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                defaultValue={transportation}
                {...register("transportation")}
                cols="30"
                rows="10"
              ></textarea>
            </div>

            <div className="form-control">
              <label
                htmlFor="destinationGallery"
                className="font-barlow font-semibold text-white"
              >
                Gallery Image URL : <br />
                <small>Click the Add more images button to add images</small>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                {destinationGallery?.map((field, index) => (
                  <div key={field.id} className="flex justify-between gap-3">
                    <input
                      type="text"
                      name={`destinationGallery[${index}].url`}
                      placeholder={`Gallery Image URL ${index + 1}`}
                      defaultValue={field.url}
                      className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono w-full"
                      {...register(`destinationGallery[${index}].url`)}
                    />
                    <button
                      type="button"
                      onClick={() => removeDestinationGallery(index)}
                      className="border border-[#131D4E] p-2 bg-white"
                      title="Remove image"
                    >
                      <FaXmark className="text-[#131D4E] text-lg" />
                    </button>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => appendDestinationGallery({ url: "" })}
                className="border border-[#131D4E] p-1 mt-3 md:w-1/5 mx-auto text-slate-400 hover:text-[#131D4E] bg-white transition-all ease-in-out duration-300"
                title="Add more image"
              >
                <BsPlus className=" text-lg inline-block" /> Add more
              </button>
            </div>

            <div className="form-control">
              <label
                htmlFor="attractions"
                className="font-barlow font-semibold text-white"
              >
                Attractions : <br />
                <small>Click the Add more button to add more attractions</small>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                {attractions?.map((field, index) => (
                  <div key={field.id} className="flex justify-between gap-3">
                    <input
                      type="text"
                      name={`attractions[${index}].attraction`}
                      placeholder={`Attraction ${index + 1}`}
                      defaultValue={field.attraction}
                      className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono w-full"
                      {...register(`attractions[${index}].attraction`)}
                    />
                    <button
                      type="button"
                      onClick={() => removeAttractions(index)}
                      className="border border-[#131D4E] p-2 bg-white"
                      title="Remove attraction"
                    >
                      <FaXmark className="text-[#131D4E] text-lg" />
                    </button>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => appendAttractions({ attraction: "" })}
                className="border border-[#131D4E] p-1 mt-3 md:w-1/5 mx-auto text-slate-400 hover:text-[#131D4E] bg-white transition-all ease-in-out duration-300"
                title="Add more attractions"
              >
                <BsPlus className=" text-lg inline-block" /> Add more
              </button>
            </div>

            <div className="form-control">
              <label
                htmlFor="travelTips"
                className="font-barlow font-semibold text-white"
              >
                Travel Tips : <br />
                <small>Click the Add more button to add more Travel Tips</small>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                {travelTips?.map((field, index) => (
                  <div key={field.id} className="flex justify-between gap-3">
                    <input
                      type="text"
                      name={`travelTips[${index}].travelTips`}
                      placeholder={`Travel Tip ${index + 1}`}
                      defaultValue={field.travelTips}
                      className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono w-full"
                      {...register(`travelTips[${index}].travelTips`)}
                    />
                    <button
                      type="button"
                      onClick={() => removeTravelTips(index)}
                      className="border border-[#131D4E] p-2 bg-white"
                      title="Remove tips"
                    >
                      <FaXmark className="text-[#131D4E] text-lg" />
                    </button>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => appendTravelTips({ travelTips: "" })}
                className="border border-[#131D4E] p-1 mt-3 md:w-1/5 mx-auto text-slate-400 hover:text-[#131D4E] bg-white transition-all ease-in-out duration-300"
                title="Add more Travel Tips"
              >
                <BsPlus className=" text-lg inline-block" /> Add more
              </button>
            </div>

            <div className="form-control">
              <label
                htmlFor="accommodation"
                className="font-barlow font-semibold text-white"
              >
                Accommodation : <br />
                <small>
                  Click the Add more button to add more Accommodation
                </small>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                {accommodation?.map((field, index) => (
                  <div key={field.id} className="flex justify-between gap-3">
                    <input
                      type="text"
                      name={`accommodation[${index}].accommodation`}
                      placeholder={`Accommodation ${index + 1}`}
                      defaultValue={field.accommodation}
                      className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono w-full"
                      {...register(`accommodation[${index}].accommodation`)}
                    />
                    <button
                      type="button"
                      onClick={() => removeAccommodation(index)}
                      className="border border-[#131D4E] p-2 bg-white"
                      title="Remove accommodation"
                    >
                      <FaXmark className="text-[#131D4E] text-lg" />
                    </button>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => appendAccommodation({ accommodation: "" })}
                className="border border-[#131D4E] p-1 mt-3 md:w-1/5 mx-auto text-slate-400 hover:text-[#131D4E] bg-white transition-all ease-in-out duration-300"
                title="Add more Accommodation"
              >
                <BsPlus className=" text-lg inline-block" /> Add more
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <input
            type="submit"
            value="Update Destination"
            className="px-5 py-2 border border-[#131D4E] bg-[#131D4E] hover:bg-white text-white hover:text-[#131D4E] duration-500 font-barlow font-bold cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateDestination;
