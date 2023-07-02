import { BsClockHistory, BsEye } from "react-icons/bs";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const ViewAllPackagesCard = ({ singlePackage }) => {
  const { _id, banner, title, duration, packagePricePerPerson, category } =
    singlePackage;
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

          <h1 className="text-base font-barlow font-bold leading-none">
            {title}
          </h1>
          <p className="text-sm font-barlow font-bold leading-none mt-3">
            Category:{" "}
            <span className="font-normal outline px-1 ml-1 outline-1 outline-black">
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
