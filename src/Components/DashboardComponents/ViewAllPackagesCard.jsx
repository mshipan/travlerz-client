import { BsClockHistory, BsEye } from "react-icons/bs";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
const ViewAllPackagesCard = ({ singlePackage }) => {
  const { banner, title, duration, packagePricePerPerson } = singlePackage;
  return (
    <div className="flex flex-col md:flex-row md:items-start p-3 shadow-xl drop-shadow-2xl rounded-xl border border-blue-200">
      <img src={banner} alt="Package Banner" className="md:w-80 rounded-xl" />
      <div className="flex flex-col md:justify-between md:px-10 py-5 md:w-2/3 h-full">
        <div>
          <p className="text-sm bg-red-500 text-white p-2 font-barlow font-semibold inline-flex items-center justify-center gap-2 mb-3">
            <BsClockHistory /> <span>{duration}</span>
          </p>

          <h1 className="text-base font-barlow font-bold leading-none">
            {title}
          </h1>
        </div>
        <div className="flex justify-between items-center mt-6 md:mt-0">
          <div className="flex items-end">
            <p className="flex items-center text-xl font-barlow font-bold text-red-500">
              {packagePricePerPerson} <TbCurrencyTaka />{" "}
            </p>
            <p className="text-base text-red-500 font-light">/ Person</p>
          </div>
          <div className="flex flex-row gap-3">
            <button
              title="view"
              className="bg-blue-500 hover:bg-white p-2 text-white hover:text-blue-500 border border-blue-500 duration-500"
            >
              <BsEye />
            </button>
            <button
              title="edit"
              className="bg-yellow-500 hover:bg-white p-2 text-white hover:text-yellow-500 border border-yellow-500 duration-500"
            >
              <FaEdit />
            </button>
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
