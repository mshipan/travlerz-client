import { Swiper, SwiperSlide } from "swiper/react";
import useReview from "../../Hooks/useReview";
import ClientSayCard from "./ClientSayCard";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const ClientSay = () => {
  const [reviews, , loading] = useReview();

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  return (
    <div className="bg-clientSay bg-no-repeat bg-fixed bg-cover p-2 md:p-0">
      <div className="container mx-auto py-10">
        <div>
          <h1 className="text-2xl font-barlow font-bold text-white text-center md:text-left">
            What Our Client Say About Us
          </h1>
          <p className="font-barlow max-w-4xl mt-5 mb-10 text-white text-center md:text-left">
            Discover what our clients have to say about their experience with
            us. Hear their voices, testimonials, and feedback that reflect the
            exceptional quality of our services. We take pride in delivering
            unparalleled customer satisfaction, leaving our clients with
            positive impressions and lasting memories. Let our client
            testimonials speak for themselves and join our community of
            satisfied travelers.
          </p>
        </div>
        <div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            breakpoints={{
              // When window width is >= 768px (desktop)
              768: {
                slidesPerView: 3,
              },
              // When window width is < 768px (mobile)
              0: {
                slidesPerView: 1,
              },
            }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={review._id}>
                <ClientSayCard review={review} index={index}></ClientSayCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ClientSay;
