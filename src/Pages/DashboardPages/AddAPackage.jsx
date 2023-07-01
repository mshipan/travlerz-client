import { useForm, useFieldArray } from "react-hook-form";
import { BsPlus } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";
import Swal from "sweetalert2";
import "./DashboardPagesCss.css";

const AddAPackage = () => {
  const { register, control, handleSubmit, reset } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tourGallery",
  });

  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5000/packages", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Package Added Successfully!",
            text: "Press OK to continue",
            icon: "success",
            confirmButtonText: "OK",
          });
          reset();
        }
      });
  };

  return (
    <div className="mb-20">
      <div className="bg-packageBg bg-no-repeat bg-cover bg-fixed bg-bottom w-full h-48 flex items-center justify-center ">
        <h1 className="font-barlow text-4xl font-bold text-white drop-shadow-2xl">
          Add a Package
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
                Tour Title :{" "}
              </label>
              <input
                type="text"
                name="title"
                placeholder=" Package Title"
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
                Duration :{" "}
              </label>
              <input
                type="text"
                name="duration"
                placeholder=" Package Duration"
                className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                {...register("duration")}
              />
            </div>
            <div className="form-control">
              <label htmlFor="tourType" className="font-barlow font-semibold">
                Tour Type :{" "}
              </label>
              <input
                type="text"
                name="tourType"
                placeholder=" Tour Type"
                className="p-1 focus:outline-none border border-[#131D4E] "
                {...register("tourType")}
              />
            </div>
            <div className="flex flex-col md:flex-row md:gap-3">
              <div className="form-control w-full">
                <label
                  htmlFor="groupSize"
                  className="font-barlow font-semibold"
                >
                  Group Size :{" "}
                </label>
                <input
                  type="number"
                  name="groupSize"
                  placeholder="Group Size"
                  className="p-1 focus:outline-none border border-[#131D4E] "
                  {...register("groupSize")}
                />
              </div>
              <div className="form-control w-full">
                <label
                  htmlFor="tourGuide"
                  className="font-barlow font-semibold"
                >
                  Tour Guide :{" "}
                </label>
                <input
                  type="number"
                  name="tourGuide"
                  placeholder=" Tour Guide"
                  className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                  {...register("tourGuide")}
                />
              </div>
              <div className="form-control w-full">
                <label
                  htmlFor="packagePricePerPerson"
                  className="font-barlow font-semibold"
                >
                  Package Price Per Person:{" "}
                </label>
                <input
                  type="number"
                  name="packagePricePerPerson"
                  placeholder=" Package Price Per Person"
                  className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                  {...register("packagePricePerPerson")}
                />
              </div>
            </div>
            <div className="form-control">
              <label
                htmlFor="destination"
                className="font-barlow font-semibold"
              >
                Destination:{" "}
              </label>
              <input
                type="text"
                name="destination"
                placeholder=" Destination"
                className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                {...register("destination")}
              />
            </div>
            <div className="form-control">
              <label htmlFor="departure" className="font-barlow font-semibold">
                Departure :{" "}
              </label>
              <input
                type="date"
                name="departure"
                className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                {...register("departure")}
              />
            </div>
            <div className="form-control">
              <label
                htmlFor="departureTime"
                className="font-barlow font-semibold"
              >
                Departure Time:{" "}
              </label>
              <input
                type="time"
                name="departureTime"
                className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                {...register("departureTime")}
              />
            </div>
            <div className="form-control">
              <label htmlFor="returnTime" className="font-barlow font-semibold">
                Return Time:{" "}
              </label>
              <input
                type="time"
                name="returnTime"
                className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                {...register("returnTime")}
              />
            </div>
            {/* package price */}
          </div>
          {/* middle */}
          <div className="w-full md:w-1/2 flex flex-col md:gap-3">
            <div className="form-control">
              <label
                htmlFor="packageDetails"
                className="font-barlow font-semibold"
              >
                Package Details :{" "}
              </label>
              <textarea
                name="packageDetails"
                placeholder=" Package Details..."
                className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                {...register("packageDetails")}
                cols="30"
                rows="10"
              ></textarea>
            </div>

            <div className="form-control">
              <label htmlFor="included" className="font-barlow font-semibold">
                Included :{" "}
                <small>
                  Press{" "}
                  <span className="outline outline-1 text-red-500 px-1">
                    Ctrl
                  </span>{" "}
                  and clicked the options to select multiple
                </small>
              </label>
              <select
                name="included"
                multiple
                className="p-1 focus:outline-none border border-[#131D4E] "
                {...register("included")}
              >
                <option value="">Select</option>
                <option value="Accommodation">Accommodation</option>
                <option value="Transportation">Transportation</option>
                <option value="Meals">Meals</option>
                <option value="Activities">Activities</option>
                <option value="Guide">Guide</option>
                <option value="Entrance fees">Entrance fees</option>
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="excluded" className="font-barlow font-semibold">
                Excluded :{" "}
                <small>
                  Press{" "}
                  <span className="outline outline-1 text-red-500 px-1">
                    Ctrl
                  </span>{" "}
                  and clicked the options to select multiple
                </small>
              </label>
              <select
                name="excluded"
                multiple
                className="p-1 focus:outline-none border border-[#131D4E] "
                {...register("excluded")}
              >
                <option value="">Select</option>
                <option value="Flights">Flights</option>
                <option value="Personal expenses">Personal expenses</option>
                <option value="Tips">Tips</option>
                <option value="Souvenirs">Souvenirs</option>
              </select>
            </div>

            <div className="form-control">
              <label
                htmlFor="tourGallery"
                className="font-barlow font-semibold"
              >
                Gallery Image URL : <br />
                <small>Click the Add more images button to add images</small>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                {fields.map((field, index) => (
                  <div key={field.id} className="flex justify-between gap-3">
                    <input
                      type="text"
                      name={`tourGallery[${index}].url`}
                      placeholder={`Gallery Image URL ${index + 1}`}
                      defaultValue={field.url}
                      className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono w-full"
                      {...register(`tourGallery[${index}].url`)}
                    />
                    <button
                      type="button"
                      onClick={() => remove(index)}
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
                onClick={() => append({ url: "" })}
                className="border border-[#131D4E] p-1 mt-3 md:w-1/5 mx-auto"
                title="Add more image"
              >
                <BsPlus className="text-[#131D4E] text-lg inline-block" /> Add
                more images
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <input
            type="submit"
            value="Add Package"
            className="px-5 py-2 border border-[#131D4E] bg-[#131D4E] hover:bg-white text-white hover:text-[#131D4E] duration-500 font-barlow font-bold cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default AddAPackage;
