import { useRef } from "react";
import { FaRegEye } from "react-icons/fa";
import StarRatingComponent from "react-star-rating-component";

const MyReviewTable = ({ singleReview, index }) => {
  const {
    title,
    name,
    photoURL,
    description,
    qualityRating,
    priceRating,
    serviceRating,
  } = singleReview;

  const viewModalRef = useRef(null);

  const openViewModal = () => {
    if (viewModalRef.current) {
      viewModalRef.current.showModal();
    }
  };

  const closeModal = (modalRef) => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <tr className="border-b border-black last:border-b-0">
      <td>{index + 1}</td>
      <td>
        <img src={photoURL} alt="User Image" className="w-16" />
      </td>
      <td>{title}</td>
      <td>{name}</td>
      <td>{qualityRating}</td>
      <td>{priceRating}</td>
      <td>{serviceRating}</td>
      <td>
        <button
          title="View review"
          onClick={openViewModal}
          className="bg-green-500 hover:bg-white border border-green-500 p-2 text-lg duration-500 disabled:opacity-30 disabled:bg-green-500"
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

                <p className="text-lg mb-1">Details: {description}</p>
                <p className="flex items-center justify-center gap-5">
                  <span className="text-lg mb-1 flex items-center gap-4">
                    Quality:
                    <StarRatingComponent
                      name="qualityRating"
                      starCount={5}
                      value={qualityRating}
                    />
                  </span>
                  <span className="text-lg mb-1 flex items-center gap-4">
                    Price:
                    <StarRatingComponent
                      name="qualityRating"
                      starCount={5}
                      value={priceRating}
                    />
                  </span>
                  <span className="text-lg mb-1 flex items-center gap-4">
                    Service:
                    <StarRatingComponent
                      name="qualityRating"
                      starCount={5}
                      value={serviceRating}
                    />
                  </span>
                </p>
              </div>
            </div>
          </form>
        </dialog>
      </td>
    </tr>
  );
};

export default MyReviewTable;
