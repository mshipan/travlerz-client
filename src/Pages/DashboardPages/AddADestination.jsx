import { useForm, useFieldArray } from "react-hook-form";
import { BsPlus } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";
import Swal from "sweetalert2";
import "./DashboardPagesCss.css";
import { Helmet } from "react-helmet-async";

const AddADestination = () => {
  const { register, control, handleSubmit, reset } = useForm();
  const {
    fields: destinationGalleryFields,
    append: appendDestinationGallery,
    remove: removeDestinationGallery,
  } = useFieldArray({
    control,
    name: "destinationGallery",
  });

  const {
    fields: attractionsFields,
    append: appendAttractions,
    remove: removeAttractions,
  } = useFieldArray({
    control,
    name: "attractions",
  });

  const {
    fields: travelTipsFields,
    append: appendTravelTips,
    remove: removeTravelTips,
  } = useFieldArray({
    control,
    name: "travelTips",
  });
  const {
    fields: accommodationFields,
    append: appendAccommodation,
    remove: removeAccommodation,
  } = useFieldArray({
    control,
    name: "accommodation",
  });

  const onSubmit = (data) => {
    console.log(data);
    fetch("https://travlerz-server-5s80t1gwz-mshipan.vercel.app/destinations", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "New Destination Added Successfully!",
            text: "Press OK to continue",
            icon: "success",
            confirmButtonText: "OK",
          });
          reset();
        }
      });
  };
  return (
    <div className="my-16">
      <Helmet>
        <title>Add a Destination | Dashboard</title>
      </Helmet>
      <div className="bg-packageBg bg-no-repeat bg-cover bg-fixed bg-bottom w-full h-48 flex items-center justify-center ">
        <h1 className="packageBannerText font-barlow text-4xl font-bold text-white drop-shadow-2xl">
          Add a Destination
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 md:gap-8 px-5 my-10"
      >
        <div className="flex flex-col md:flex-row justify-center md:gap-8 w-full ">
          <div className="w-full md:w-1/2 flex flex-col md:gap-3">
            <div className="form-control">
              <label htmlFor="title" className="font-barlow font-semibold">
                Destination Title :{" "}
              </label>
              <input
                type="text"
                name="title"
                placeholder=" Destination Title"
                className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                {...register("title")}
              />
            </div>
            <div className="form-control">
              <label htmlFor="banner" className="font-barlow font-semibold">
                Banner Image URL :{" "}
              </label>
              <input
                type="text"
                name="banner"
                placeholder=" Banner URL"
                className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                {...register("banner")}
              />
            </div>
            <div className="form-control">
              <label htmlFor="location" className="font-barlow font-semibold">
                Location :{" "}
              </label>
              <input
                type="text"
                name="location"
                placeholder=" Location"
                className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                {...register("location")}
              />
            </div>
            <div className="form-control">
              <label htmlFor="duration" className="font-barlow font-semibold">
                Map Link :{" "}
              </label>
              <input
                type="text"
                name="mapLink"
                placeholder=" Destination Map Link"
                className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                {...register("mapLink")}
              />
            </div>
            <div className="form-control">
              <label
                htmlFor="packageDetails"
                className="font-barlow font-semibold"
              >
                Destination Description :{" "}
              </label>
              <textarea
                name="destinationDescription"
                placeholder=" Destination Description..."
                className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                {...register("destinationDescription")}
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="form-control">
              <label
                htmlFor="climateAndWeather"
                className="font-barlow font-semibold"
              >
                Climate & Weather Description :{" "}
              </label>
              <textarea
                name="climateAndWeather"
                placeholder=" Climate & Weather Description..."
                className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
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
                className="font-barlow font-semibold"
              >
                Local Cuisine Description :{" "}
              </label>
              <textarea
                name="localCuisine"
                placeholder=" Local Cuisine Description..."
                className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                {...register("localCuisine")}
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="form-control">
              <label
                htmlFor="transportation"
                className="font-barlow font-semibold"
              >
                Transportation Description :{" "}
              </label>
              <textarea
                name="transportation"
                placeholder=" Transportation Description..."
                className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                {...register("transportation")}
                cols="30"
                rows="10"
              ></textarea>
            </div>

            <div className="form-control">
              <label
                htmlFor="destinationGallery"
                className="font-barlow font-semibold"
              >
                Gallery Image URL : <br />
                <small>Click the Add more images button to add images</small>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                {destinationGalleryFields.map((field, index) => (
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
                      className="border border-[#131D4E] p-2 "
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
                className="border border-[#131D4E] p-1 mt-3 md:w-1/5 mx-auto"
                title="Add more image"
              >
                <BsPlus className="text-[#131D4E] text-lg inline-block" /> Add
                more
              </button>
            </div>

            <div className="form-control">
              <label
                htmlFor="attractions"
                className="font-barlow font-semibold"
              >
                Attractions : <br />
                <small>Click the Add more button to add more attractions</small>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                {attractionsFields.map((field, index) => (
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
                      className="border border-[#131D4E] p-2 "
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
                className="border border-[#131D4E] p-1 mt-3 md:w-1/5 mx-auto"
                title="Add more attractions"
              >
                <BsPlus className="text-[#131D4E] text-lg inline-block" /> Add
                more
              </button>
            </div>

            <div className="form-control">
              <label htmlFor="travelTips" className="font-barlow font-semibold">
                Travel Tips : <br />
                <small>Click the Add more button to add more Travel Tips</small>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                {travelTipsFields.map((field, index) => (
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
                      className="border border-[#131D4E] p-2 "
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
                className="border border-[#131D4E] p-1 mt-3 md:w-1/5 mx-auto"
                title="Add more Travel Tips"
              >
                <BsPlus className="text-[#131D4E] text-lg inline-block" /> Add
                more
              </button>
            </div>

            <div className="form-control">
              <label
                htmlFor="accommodation"
                className="font-barlow font-semibold"
              >
                Accommodation : <br />
                <small>
                  Click the Add more button to add more Accommodation
                </small>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                {accommodationFields.map((field, index) => (
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
                      className="border border-[#131D4E] p-2 "
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
                className="border border-[#131D4E] p-1 mt-3 md:w-1/5 mx-auto"
                title="Add more Accommodation"
              >
                <BsPlus className="text-[#131D4E] text-lg inline-block" /> Add
                more
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <input
            type="submit"
            value="Add Destination"
            className="px-5 py-2 border border-[#131D4E] bg-[#131D4E] hover:bg-white text-white hover:text-[#131D4E] duration-500 font-barlow font-bold cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default AddADestination;
