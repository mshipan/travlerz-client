// import { SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import StarRatingComponent from "react-star-rating-component";
const ClientSayCard = ({ review, index }) => {
  const { name, photoURL, description, serviceRating } = review;
  return (
    <div className="flex flex-col items-center gap-5 w-full h-full bg-white p-5">
      <div className="flex items-center justify-between gap-10">
        <FaQuoteLeft className="text-3xl opacity-20" />
        <img
          src={photoURL}
          alt="user image"
          className="w-20 rounded-full border-2 border-white"
        />
        <h1 className="text-3xl font-bold font-barlow opacity-20">
          {index + 1}
        </h1>
      </div>
      <p className="font-barlow max-w-xl text-center text-sm text-black">
        {description.slice(0, 90)}...
      </p>
      <div className="flex items-center justify-between gap-32">
        <h1 className="font-barlow text-xl font-bold text-black">{name}</h1>
        <StarRatingComponent
          name="serviceRating"
          starCount={5}
          value={serviceRating}
        />
      </div>
    </div>
  );
};

export default ClientSayCard;
