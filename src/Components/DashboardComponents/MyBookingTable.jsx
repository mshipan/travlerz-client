import { useRef, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import StarRatingComponent from "react-star-rating-component";
import Swal from "sweetalert2";

const MyBookingTable = ({ book, index }) => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const [qualityRating, setQualityRating] = useState(0);
  const [priceRating, setPriceRating] = useState(0);
  const [serviceRating, setServiceRating] = useState(0);
  const {
    title,
    name,
    totalPrice,
    email,
    phone,
    yourGroupSize,
    specialRequests,
    status,
  } = book;

  const viewModalRef = useRef(null);
  const reviewModalRef = useRef(null);

  const openViewModal = () => {
    if (viewModalRef.current) {
      viewModalRef.current.showModal();
    }
  };

  const openReviewModal = () => {
    if (reviewModalRef.current) {
      reviewModalRef.current.showModal();
    }
  };

  const closeModal = (modalRef) => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        uid: user.uid,
        title: title,
        name: name,
        photoURL: user.photoURL,
        description: data.reviewDescription,
        qualityRating: qualityRating,
        priceRating: priceRating,
        serviceRating: serviceRating,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            title: "Review Added Successfully!",
            text: "Please visit your dashboard / my reviews for view your ratings",
            icon: "success",
            confirmButtonText: "OK",
          });
          reset();
        }
      });
  };

  const onQualityRatingChange = (value) => {
    setQualityRating(value);
  };

  const onPriceRatingChange = (value) => {
    setPriceRating(value);
  };

  const onServiceRatingChange = (value) => {
    setServiceRating(value);
  };

  return (
    <tr className="border-b border-black last:border-b-0">
      <td className="text-white">{index + 1}</td>
      <td className="text-left text-white">{title}</td>
      <td className="text-left text-white">{name}</td>
      <td className="text-white">{totalPrice}</td>
      <td className="text-white">{status}</td>
      <td>
        <div className="flex items-center justify-center gap-3">
          <button
            title="View Booking"
            onClick={openViewModal}
            className="bg-green-500 hover:bg-white border border-green-500 p-2 text-lg duration-500 disabled:opacity-30 disabled:bg-green-500 text-white hover:text-slate-400"
          >
            <FaRegEye />
          </button>
          <dialog id="view_modal" className="modal" ref={viewModalRef}>
            <form method="dialog" className="modal-box w-full max-w-2xl">
              <button
                onClick={() => closeModal(viewModalRef)}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
              <div className="flex flex-col md:flex-row md:justify-evenly items-center gap-5 md:gap-0">
                <div className="flex flex-col">
                  <h3 className="font-barlow text-xl font-semibold">
                    Name: {name}
                  </h3>
                  <p className="text-lg my-1">Package Name: {title}</p>
                  <p className="text-lg my-1">Email: {email}</p>
                  <p className="text-lg mb-1">Mobile: {phone}</p>
                  <p className="text-lg mb-1">Total Person: {yourGroupSize}</p>
                  <p className="text-lg mb-1">Total Price: {totalPrice} Taka</p>
                  <p className="text-lg mb-1">
                    Special Request: {specialRequests}
                  </p>
                </div>
              </div>
            </form>
          </dialog>
          <button
            title="Give a Review"
            onClick={openReviewModal}
            disabled={status === "pending" || status === "denied"}
            className="bg-yellow-500 hover:bg-white border border-yellow-500 p-2 text-lg duration-500 disabled:opacity-30 disabled:bg-yellow-500 text-white hover:text-slate-400"
          >
            <MdOutlineRateReview />
          </button>
          <dialog id="review_modal" className="modal" ref={reviewModalRef}>
            <div className="modal-box w-full">
              <button
                onClick={() => closeModal(reviewModalRef)}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
              <h1 className="font-barlow text-xl font-semibold mb-5 text-center">
                Leave a Review about this Tour
              </h1>
              <div className="flex flex-col md:flex-row items-center gap-5">
                <div className="">
                  <h1 className="font-barlow text-base mb-1">Your Photo</h1>
                  <img
                    src={user.photoURL}
                    alt="user photo"
                    className="w-20 md:w-40"
                  />
                </div>
                <div className="flex flex-col items-center md:items-start w-full">
                  <h3 className="font-barlow text-sm md:text-lg">
                    Name: {name}
                  </h3>
                  <p className="font-barlow text-sm md:text-lg mb-3 text-start">
                    Package Name: {title}
                  </p>

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-2/3 md:w-full"
                  >
                    <div className="form-control">
                      <textarea
                        name="reviewDescription"
                        placeholder="Write your review"
                        className="p-1 border border-[#131D4E] mb-1 outline-none"
                        rows="3"
                        {...register("reviewDescription")}
                      ></textarea>
                    </div>
                    <div className="flex flex-col items-center md:items-start gap-3 my-3">
                      <div className="flex items-center gap-3">
                        <label htmlFor="qualityRating" className="font-barlow">
                          Quality:{" "}
                        </label>
                        <StarRatingComponent
                          name="qualityRating"
                          starCount={5}
                          value={qualityRating}
                          onStarClick={onQualityRatingChange}
                        />
                        <p>{qualityRating} / 5</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <label htmlFor="priceRating" className="font-barlow">
                          Price:{" "}
                        </label>
                        <StarRatingComponent
                          name="priceRating"
                          starCount={5}
                          value={priceRating}
                          onStarClick={onPriceRatingChange}
                        />
                        <p>{priceRating} / 5</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <label htmlFor="serviceRating" className="font-barlow">
                          Service:{" "}
                        </label>
                        <StarRatingComponent
                          name="serviceRating"
                          starCount={5}
                          value={serviceRating}
                          onStarClick={onServiceRatingChange}
                        />
                        <p>{serviceRating} / 5</p>
                      </div>
                    </div>
                    <input
                      type="submit"
                      value="Submit review"
                      className="px-3 py-1 bg-[#131D4E] hover:bg-white text-white hover:text-[#131D4E] border border-[#131D4E] cursor-pointer duration-500 mt-5"
                    />
                  </form>
                </div>
              </div>
            </div>
          </dialog>
        </div>
      </td>
    </tr>
  );
};

export default MyBookingTable;
