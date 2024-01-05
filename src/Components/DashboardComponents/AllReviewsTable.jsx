import { useRef } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import StarRatingComponent from "react-star-rating-component";
import Swal from "sweetalert2";
import useReview from "../../Hooks/useReview";

const AllReviewsTable = ({ singleReview, index }) => {
  const [, refetch] = useReview();
  const {
    _id,
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
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure to Delete?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://travlerz-server-production.up.railway.app/reviews/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Review has been deleted.", "success");
            }
            refetch();
          });
      }
    });
  };
  return (
    <tr className="border-b border-black last:border-b-0">
      <td>{index + 1}</td>
      <td>
        <img src={photoURL} alt="User Image" className="w-16" />
      </td>
      <td className="text-left text-white">{title}</td>
      <td className="text-left text-white">{name}</td>
      <td className="text-left text-white">{qualityRating}</td>
      <td className="text-left text-white">{priceRating}</td>
      <td className="text-left text-white">{serviceRating}</td>
      <td>
        <div className="flex items-center justify-center gap-3">
          <button
            title="view booking"
            onClick={openViewModal}
            className="bg-green-500 hover:bg-white border border-green-500 p-2 text-lg duration-500 text-white hover:text-slate-400"
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
          <button
            title="delete booking"
            onClick={() => handleDelete(_id)}
            className="bg-yellow-500 hover:bg-white border border-yellow-500 p-2 text-lg duration-500 text-white hover:text-slate-400"
          >
            <FaRegTrashAlt />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default AllReviewsTable;
