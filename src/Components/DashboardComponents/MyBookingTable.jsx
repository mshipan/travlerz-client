import { useRef } from "react";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
const MyBookingTable = ({ book, index }) => {
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

  const modalRef = useRef(null);

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

  return (
    <tr className="border-b border-black last:border-b-0">
      <td>{index + 1}</td>
      <td className="text-left">{title}</td>
      <td className="text-left">{name}</td>
      <td>{totalPrice}</td>
      <td>{status}</td>
      <td>
        <div className="flex items-center justify-center gap-3">
          <button
            title="View Booking"
            onClick={openModal}
            className="bg-green-500 hover:bg-white border border-green-500 p-2 text-lg duration-500 disabled:opacity-30 disabled:bg-green-500"
          >
            <FaRegEye />
          </button>
          <dialog id="my_modal_4" className="modal" ref={modalRef}>
            <form method="dialog" className="modal-box w-full max-w-2xl">
              <button
                onClick={closeModal}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
              <div className="flex flex-col md:flex-row md:justify-evenly items-center gap-5 md:gap-0">
                <div className="flex flex-col ">
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
            disabled={status === "pending" || status === "denied"}
            className="bg-yellow-500 hover:bg-white border border-yellow-500 p-2 text-lg duration-500 disabled:opacity-30 disabled:bg-yellow-500"
          >
            <MdOutlineRateReview />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyBookingTable;
