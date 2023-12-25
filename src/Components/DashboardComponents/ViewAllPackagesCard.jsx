import { BsClockHistory, BsEye } from "react-icons/bs";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ViewAllPackagesCard = ({ singlePackage, packages, setPackages }) => {
  const { _id, banner, title, duration, packagePricePerPerson, category } =
    singlePackage;
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
        fetch(`http://localhost:5000/package/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "This package has been deleted.",
                "success"
              );
              const remaining = packages.filter((sP) => sP._id !== _id);
              setPackages(remaining);
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
              {packagePricePerPerson}{" "}
              <span className="text-base text-red-500 font-light">
                <TbCurrencyTaka />
              </span>{" "}
              <span className="text-base text-red-500 font-light inline-flex items-center ml-1 gap-1">
                / <FaUserAlt />
              </span>
            </p>
            <div className="flex items-center">
              <p className="text-sm bg-red-500 text-white p-2 font-barlow font-semibold inline-flex items-center justify-center gap-2 ">
                <BsClockHistory /> <span>{duration}</span>
              </p>
            </div>
          </div>

          <h1 className="text-base font-barlow font-bold leading-none text-white">
            {title}
          </h1>
          <p className="text-sm font-barlow font-bold leading-none mt-3 text-slate-400">
            Category:{" "}
            <span className="font-normal outline px-1 ml-1 outline-1 outline-black text-white">
              {category}
            </span>
          </p>
        </div>
        <div className="flex justify-between items-center mt-6 md:mt-4 lg:mt-6">
          <div className="flex flex-row gap-3">
            <Link to={`/dashboard/package/${_id}`}>
              <button
                title="view details"
                className="bg-blue-500 hover:bg-white p-2 text-white hover:text-blue-500 border border-blue-500 duration-500"
              >
                <BsEye />
              </button>
            </Link>
            <Link to={`/dashboard/update-package/${_id}`}>
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

export default ViewAllPackagesCard;
