import { Link } from "react-router-dom";

const DestinationCard = ({ destination }) => {
  const { _id, banner, title } = destination;
  return (
    <div className="relative overflow-hidden group rounded-xl">
      <div className="transition duration-300 ease-in-out transform-gpu group-hover:scale-110">
        <img
          src={banner}
          alt="Destination Image"
          className="rounded-xl h-64 w-full"
        />
        <div className="bg-black absolute inset-0 z-10 opacity-30 rounded-xl"></div>
      </div>
      <Link to={`/destination/${_id}`}>
        <h1 className="text-xl font-barlow font-bold text-center absolute bottom-4 left-0 right-0 z-20 text-white group-hover:-translate-y-5 group-hover:underline underline-offset-8 transition duration-300 ease-in-out transform-gpu">
          {title}
        </h1>
      </Link>
    </div>
  );
};

export default DestinationCard;
