import { useRef } from "react";
import { FaCheck, FaRegEye, FaRegTrashAlt } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Swal from "sweetalert2";

const AllBookingsTable = ({ booking, bookings, setBookings, index }) => {
  const {
    _id,
    title,
    name,
    email,
    phone,
    yourGroupSize,
    specialRequests,
    totalPrice,
    status,
  } = booking;
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

  const handleApprove = (_id) => {
    fetch(`https://travlerz-server.vercel.app/booking/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Booking Approved",
            showConfirmButton: false,
            timer: 1500,
          });
          const updateBookings = bookings.map((booking) => {
            if (booking._id === _id) {
              return { ...booking, status: "approved" };
            }
            return booking;
          });
          setBookings(updateBookings);
        }
      });
  };

  const handleDeny = (_id) => {
    fetch(`https://travlerz-server.vercel.app/booking/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "denied" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Booking Denied",
            showConfirmButton: false,
            timer: 1500,
          });
          const updateBookings = bookings.map((booking) => {
            if (booking._id === _id) {
              return { ...booking, status: "denied" };
            }
            return booking;
          });
          setBookings(updateBookings);
        }
      });
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
        fetch(`https://travlerz-server.vercel.app/booking/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Booking has been deleted.", "success");
              const remainingBooking = bookings.filter((aU) => aU._id !== _id);
              setBookings(remainingBooking);
            }
          });
      }
    });
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
            title={status === "approved" ? "button disabled" : "approve"}
            onClick={() => handleApprove(_id)}
            disabled={status === "approved"}
            className="bg-green-500 hover:bg-white border border-green-500 p-2 text-lg duration-500 disabled:opacity-30 disabled:bg-green-500"
          >
            <FaCheck />
          </button>
          <button
            title={status === "denied" ? "button disabled" : "deny"}
            onClick={() => handleDeny(_id)}
            disabled={status === "denied"}
            className="bg-yellow-500 hover:bg-white border border-yellow-500 p-2 text-lg duration-500 disabled:opacity-30 disabled:bg-yellow-500"
          >
            <FaXmark />
          </button>
        </div>
      </td>
      <td>
        <div className="flex items-center justify-center gap-3">
          <button
            title="view booking"
            onClick={openModal}
            className="bg-green-500 hover:bg-white border border-green-500 p-2 text-lg duration-500"
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
            title="delete booking"
            onClick={() => handleDelete(_id)}
            className="bg-yellow-500 hover:bg-white border border-yellow-500 p-2 text-lg duration-500"
          >
            <FaRegTrashAlt />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default AllBookingsTable;
