import { BsEye } from "react-icons/bs";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ViewAllDestinationCard = ({
  destination,
  destinations,
  setDestinations,
}) => {
  const { _id, banner, title, location } = destination;
  console.log(destination);
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
        fetch(`https://travlerz-server.vercel.app/destination/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "This destination has been deleted.",
                "success"
              );
              const remaining = destinations.filter((sP) => sP._id !== _id);
              setDestinations(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="flex flex-col md:flex-row md:items-start p-3 shadow-xl drop-shadow-2xl rounded-xl border border-blue-200">
      <img src={banner} alt="Package Banner" className="md:w-80 rounded-xl" />
      <div className="flex flex-col md:justify-between md:pl-4 lg:pl-8 py-5 w-full h-full">
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="inline-flex items-center font-barlow font-bold text-red-500 text-xl">
              {title}
            </p>
          </div>

          <h1 className="text-base font-barlow font-bold leading-none">
            {location}
          </h1>
        </div>
        <div className="flex justify-between items-center mt-6 md:mt-4 lg:mt-6">
          <div className="flex flex-row gap-3">
            <Link to={`/dashboard/destination/${_id}`}>
              <button
                title="view details"
                className="bg-blue-500 hover:bg-white p-2 text-white hover:text-blue-500 border border-blue-500 duration-500"
              >
                <BsEye />
              </button>
            </Link>
            <Link to={`/dashboard/update-destination/${_id}`}>
              <button
                title="edit"
                className="bg-yellow-500 hover:bg-white p-2 text-white hover:text-yellow-500 border border-yellow-500 duration-500"
              >
                <FaEdit />
              </button>
            </Link>
            <button
              title="delete"
              onClick={() => handleDelete(_id)}
              className="bg-red-500 hover:bg-white p-2 text-white hover:text-red-500 border border-red-500 duration-500"
            >
              <FaTrashAlt />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllDestinationCard;
