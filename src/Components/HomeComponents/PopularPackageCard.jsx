import { BsArrowRightShort, BsClockHistory } from "react-icons/bs";
import { Link } from "react-router-dom";

const PopularPackageCard = ({ newPackage }) => {
  const { _id, banner, title, duration, packagePricePerPerson } = newPackage;
  return (
    <div className="w-full rounded-lg shadow-lg">
      <div className="overflow-hidden rounded-lg">
        <img
          src={banner}
          alt="Package Banner"
          className="rounded-t-lg transition duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <div className="p-3">
        <p className="font-barlow font-semibold text-white bg-red-500 p-2 w-1/2 text-center inline-flex items-center gap-2">
          <BsClockHistory /> {duration}
        </p>
        <h1 className="font-barlow font-bold text-lg leading-6 my-3">
          {title}
        </h1>
        <div className="flex items-center justify-between">
          <Link to={`/package/${_id}`}>
            <button className="border border-red-500 px-3 py-1 font-barlow font-semibold text-red-500 hover:text-white hover:bg-red-500 duration-500 rounded-lg inline-flex items-center gap-1 hover:gap-2">
              View details <BsArrowRightShort />
            </button>
          </Link>
          <p className="flex flex-col leading-3">
            From
            <span className="text-lg font-bold font-barlow text-red-500">
              {packagePricePerPerson} Tk {""}
              <small className="font-normal text-black text-xs">
                Per Person
              </small>{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopularPackageCard;
