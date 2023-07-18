import { useLoaderData } from "react-router-dom";
import { BiMap } from "react-icons/bi";
import { Helmet } from "react-helmet-async";
import { BsClockHistory, BsCheck2 } from "react-icons/bs";
import { LuFootprints } from "react-icons/lu";
import { MdGroups } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { HiMiniCurrencyBangladeshi } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import { SlideshowLightbox } from "lightbox.js-react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";

const SinglePackage = () => {
  const { user } = useAuth();
  const modalRef = useRef(null);
  const singlePackage = useLoaderData();
  const { register, handleSubmit, watch, reset } = useForm({
    defaultValues: {
      yourGroupSize: 0,
    },
  });
  const [totalPrice, setTotalPrice] = useState(0);

  const {
    banner,
    location,
    title,
    packageDetails,
    duration,
    tourType,
    groupSize,
    tourGuide,
    packagePricePerPerson,
    destination,
    departure,
    departureTime,
    returnTime,
    included,
    excluded,
    tourGallery,
  } = singlePackage;
  // Function to format time from 24-hour format to 12-hour format
  const formatTime = (time) => {
    const [hour, minutes] = time.toString().split(":");
    const formattedHour = parseInt(hour) % 12 || 12;
    const period = parseInt(hour) < 12 ? "AM" : "PM";
    const formattedMinutes = minutes ? `:${minutes}` : ""; // Add this line
    return `${formattedHour}${formattedMinutes} ${period}`;
  };

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  const yourGroupSize = watch("yourGroupSize", 0);

  useEffect(() => {
    const calculatedTotalPrice = yourGroupSize * packagePricePerPerson;
    setTotalPrice(calculatedTotalPrice);
  }, [yourGroupSize, packagePricePerPerson]);

  const handleFormSubmit = (data) => {
    console.log(data);
    fetch("https://travlerz-server.vercel.app/bookings", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        uid: user.uid,
        title: title,
        totalPrice,
        name: data.name,
        email: data.email,
        phone: data.phone,
        yourGroupSize: data.yourGroupSize,
        specialRequests: data.specialRequests,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            title: "Booking Added Successfully!",
            text: "Please visit your dashboard / my booking for finalize the booking",
            icon: "success",
            confirmButtonText: "OK",
          });
          reset();
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title> Package Details | Travlerz</title>
      </Helmet>
      <div className="bg-bannerBg h-48 md:h-72 w-full bg-no-repeat bg-cover bg-bottom flex items-center justify-center">
        <h1 className="packageBannerText text-white font-barlow text-4xl font-bold">
          Packages Details
        </h1>
      </div>
      <div className=" md:w-1/2 mx-auto my-20 px-5 md:px-0">
        <div className="grid grid-cols-2 md:grid-cols-5 justify-items-stretch gap-3 my-5">
          <div className="flex items-center gap-3">
            <BsClockHistory className="text-3xl text-red-500" />
            <div className="font-barlow">
              <p className="leading-none text-base font-medium">Duration</p>
              <p className="leading-none mt-1">
                <small>{duration}</small>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <LuFootprints className="text-3xl text-red-500" />
            <div className="font-barlow">
              <p className="leading-none text-base font-medium">Tour Types</p>
              <p className="leading-none mt-1">
                <small>{tourType}</small>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MdGroups className="text-3xl text-red-500" />
            <div className="font-barlow">
              <p className="leading-none text-base font-medium">Group Size</p>
              <p className="leading-none mt-1">
                <small>{groupSize} People</small>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <GoPeople className="text-3xl text-red-500" />
            <div className="font-barlow">
              <p className="leading-none text-base font-medium">Tour Guide</p>
              <p className="leading-none mt-1">
                <small>{tourGuide} People</small>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <HiMiniCurrencyBangladeshi className="text-3xl text-red-500" />
            <div className="font-barlow">
              <p className="leading-none text-base font-medium">Price</p>
              <p className="leading-none mt-1">
                <small>{packagePricePerPerson} Tk / Person</small>
              </p>
            </div>
          </div>
        </div>
        <img src={banner} alt="Package Banner" className="w-full rounded-lg" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-5 gap-5">
          <div>
            <p className="inline-flex items-center md:text-lg text-red-500 font-thin">
              <BiMap />{" "}
              <span className="font-barlow font-bold">{location}</span>
            </p>
            <h1 className="text-xl md:text-3xl font-bold font-barlow">
              {title}
            </h1>
          </div>
          <div>
            <button
              onClick={openModal}
              className="bg-red-500 hover:bg-white px-5 py-2 text-white hover:text-red-500 border border-red-500 duration-500 text-lg font-medium font-barlow"
            >
              Book this Tour
            </button>
            <dialog id="my_modal_4" className="modal" ref={modalRef}>
              <div className="modal-box w-full max-w-2xl">
                <button
                  onClick={closeModal}
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                  ✕
                </button>
                <div className="flex flex-col items-center gap-5 md:gap-3">
                  <div>
                    <img src={banner} alt="Package Banner" className="w-96" />
                    <h1 className="text-lg font-barlow font-semibold mt-3 text-red-500">
                      {title}
                    </h1>
                    <p className="font-barlow">
                      Payable Price:{" "}
                      <span className="text-red-500 font-semibold">
                        {totalPrice}
                      </span>{" "}
                      Taka{" "}
                    </p>
                  </div>
                  <div>
                    <form
                      onSubmit={handleSubmit(handleFormSubmit)}
                      className="flex flex-col gap-2"
                    >
                      <div className="flex flex-col md:flex-row gap-2">
                        <div>
                          <div className="form-control">
                            <label htmlFor="name">Name:</label>
                            <input
                              type="text"
                              name="name"
                              {...register("name")}
                              placeholder="Your Full Name"
                              className="p-1 border border-[#131D4E]"
                            />
                          </div>
                          <div className="form-control">
                            <label htmlFor="email">Email:</label>
                            <input
                              type="email"
                              name="email"
                              {...register("email")}
                              placeholder="Your Email"
                              className="p-1 border border-[#131D4E]"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="form-control">
                            <label htmlFor="phone">Phone:</label>
                            <input
                              type="text"
                              name="phone"
                              {...register("phone")}
                              placeholder="Your Phone Number"
                              className="p-1 border border-[#131D4E]"
                            />
                          </div>
                          <div className="form-control">
                            <label htmlFor="yourGroupSize">
                              Group Size:{" "}
                              <small className="text-red-500">
                                (Total Member)
                              </small>{" "}
                            </label>
                            <input
                              type="number"
                              name="yourGroupSize"
                              {...register("yourGroupSize")}
                              placeholder="How many People?"
                              className="p-1 border border-[#131D4E]"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-control">
                        <label htmlFor="specialRequests">
                          Special Requests:
                        </label>
                        <input
                          type="text"
                          name="specialRequests"
                          {...register("specialRequests")}
                          placeholder="Type if you have any Special Requests. If no type N/A"
                          className="p-1 border border-[#131D4E]"
                        />
                      </div>

                      <input
                        type="submit"
                        value="Book This Tour"
                        className="px-3 py-1 bg-[#131D4E] hover:bg-white border border-[#131D4E] text-white hover:text-[#131D4E] cursor-pointer duration-500 mt-2"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        <div className="divider"></div>
        <div>
          <h1 className="text-2xl font-barlow font-bold mb-3">
            Package Details
          </h1>
          <p className="font-barlow">{packageDetails}</p>
        </div>
        <div className="shadow-lg my-5">
          <table className="table border border-black">
            <tbody>
              <tr className="border border-black">
                <td className="font-barlow font-bold border border-black">
                  Destination
                </td>
                <td>{destination}</td>
              </tr>
              <tr className="border border-black">
                <td className="font-barlow font-bold border border-black">
                  Departure
                </td>
                <td>
                  {new Date(departure).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </td>
              </tr>
              <tr className="border border-black">
                <td className="font-barlow font-bold border border-black">
                  Departure Time
                </td>
                <td>{formatTime(departureTime.toString())}</td>
              </tr>
              <tr className="border border-black">
                <td className="font-barlow font-bold border border-black">
                  Return Time
                </td>
                <td>{formatTime(returnTime.toString())}</td>
              </tr>
              <tr className="border border-black">
                <td className="font-barlow font-bold border border-black">
                  Included
                </td>
                <td>
                  {included.map((incld, index) => (
                    <div key={index}>
                      <div className="inline-flex items-center gap-1">
                        <BsCheck2 className="text-sky-500" /> {incld}
                      </div>
                    </div>
                  ))}
                </td>
              </tr>
              <tr className="border border-black">
                <td className="font-barlow font-bold border border-black">
                  Excluded
                </td>
                <td>
                  {excluded.map((incld, index) => (
                    <div key={index}>
                      <div className="inline-flex items-center gap-1">
                        <LiaTimesSolid className="text-red-500" /> {incld}
                      </div>
                    </div>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="my-10">
          <h1 className="text-2xl font-barlow font-bold mb-5">Tour Gallery</h1>
          <div>
            <SlideshowLightbox className="grid grid-cols-2 gap-2 ">
              {tourGallery.map((gallery, index) => (
                <img
                  key={index}
                  src={gallery.url}
                  alt="Package Gallery Image"
                  className={`w-full border-2 border-white ${
                    index % 3 === 2 ? "col-span-2" : ""
                  } ${index > 2 ? "mt-2" : ""}`}
                />
              ))}
            </SlideshowLightbox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePackage;
