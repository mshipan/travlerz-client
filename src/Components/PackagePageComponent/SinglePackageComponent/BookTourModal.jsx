import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const BookTourModal = ({ modalRef, closeModal, singlePackage }) => {
  const { user } = useAuth();
  const [totalPrice, setTotalPrice] = useState(0);
  const { register, handleSubmit, watch, reset } = useForm({
    defaultValues: {
      yourGroupSize: 0,
    },
  });
  const yourGroupSize = watch("yourGroupSize", 0);

  const { packagePricePerPerson, title, banner } = singlePackage;

  useEffect(() => {
    if (yourGroupSize >= 0) {
      const calculatedTotalPrice = yourGroupSize * packagePricePerPerson;
      setTotalPrice(calculatedTotalPrice);
    }
  }, [yourGroupSize, packagePricePerPerson]);

  const handleFormSubmit = (data) => {
    fetch("http://localhost:5000/bookings", {
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
              <span className="text-red-500 font-semibold">{totalPrice}</span>{" "}
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
                      <small className="text-red-500">(Total Member)</small>{" "}
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
                <label htmlFor="specialRequests">Special Requests:</label>
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
  );
};

export default BookTourModal;
