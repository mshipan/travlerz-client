import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation } from "swiper";

import img1 from "../../assets/footerImages/image1.jpg";
import img2 from "../../assets/footerImages/image2.jpg";
import img3 from "../../assets/footerImages/image3.jpg";
import img4 from "../../assets/footerImages/image4.jpg";

const BannerSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, EffectFade, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex">
            <div className="w-full md:w-1/2 relative md:static">
              <img src={img1} className="w-full" />
              <h1 className="absolute top-1/2 right-0 left-0 text-center font-barlow text-3xl font-bold text-[#ff4838] mb-3 block md:hidden">
                Travel & <span className=" text-white">Adventure</span>
              </h1>
            </div>
            <div className="w-1/2 bg-bannerBg bg-cover bg-no-repeat hidden md:block">
              <div className="bg-[#131D4E] h-full bg-opacity-50 flex items-center pl-16">
                <div>
                  <h1 className=" font-barlow text-6xl font-bold text-[#ff4838] mb-3">
                    Travel & <span className=" text-white">Adventure</span>
                  </h1>
                  <p className="text-white max-w-2xl mb-5">
                    Are you ready to embark on unforgettable journeys filled
                    with excitement and discovery? Join us at Travlerz, your
                    ultimate gateway to thrilling travel and adventure
                    experiences! Explore breathtaking destinations, conquer
                    thrilling outdoor activities, and create lifelong memories
                    with our expertly curated itineraries. Get ready to unlock
                    the world of travel and adventure with Travlerz, where
                    unforgettable experiences await at every turn. Start your
                    next adventure today!
                  </p>
                  <div className="flex gap-8">
                    <button className="bg-[#ff4838] hover:bg-transparent border border-[#ff4838] text-white hover:text-[#ff4838] font-bold px-10 py-2 duration-500">
                      View Adventure
                    </button>
                    <button className="hover:bg-[#ff4838] border border-[#ff4838] text-[#ff4838] hover:text-white font-bold px-10 py-2 duration-500">
                      Take a Tour
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex">
            <div className="w-full md:w-1/2 relative md:static">
              <img src={img2} className="w-full" />
              <h1 className="absolute top-1/2 right-0 left-0 text-center font-barlow text-3xl font-bold text-[#ff4838] mb-3 block md:hidden">
                Move The <span className=" text-white">Earth</span>
              </h1>
            </div>
            <div className="w-1/2 bg-bannerBg bg-cover bg-no-repeat hidden md:block">
              <div className="bg-[#131D4E] h-full bg-opacity-50 flex items-center pl-16">
                <div>
                  <h1 className=" font-barlow text-6xl font-bold text-[#ff4838] mb-3">
                    Move The <span className=" text-white">Earth</span>
                  </h1>
                  <p className="text-white max-w-2xl mb-5">
                    your ultimate travel companion for unforgettable adventures!
                    Explore our website to discover a world of immersive travel
                    experiences, curated itineraries, and expert
                    recommendations, empowering you to create lifelong memories
                    while exploring every corner of the globe. Let Travlerz be
                    your guide on the journey of a lifetime
                  </p>
                  <div className="flex gap-8">
                    <button className="bg-[#ff4838] hover:bg-transparent border border-[#ff4838] text-white hover:text-[#ff4838] font-bold px-10 py-2 duration-500">
                      View Adventure
                    </button>
                    <button className="hover:bg-[#ff4838] border border-[#ff4838] text-[#ff4838] hover:text-white font-bold px-10 py-2 duration-500">
                      Take a Tour
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex">
            <div className="w-full md:w-1/2 relative md:static">
              <img src={img3} className="w-full" />
              <h1 className="absolute top-1/2 right-0 left-0 text-center font-barlow text-3xl font-bold text-[#ff4838] mb-3 block md:hidden">
                Explore New <span className=" text-white">People</span>
              </h1>
            </div>
            <div className="w-1/2 bg-bannerBg bg-cover bg-no-repeat hidden md:block">
              <div className="bg-[#131D4E] h-full bg-opacity-50 flex items-center pl-16">
                <div>
                  <h1 className=" font-barlow text-6xl font-bold text-[#ff4838] mb-3">
                    Explore New <span className=" text-white">People</span>
                  </h1>
                  <p className="text-white max-w-2xl mb-5">
                    Introducing Travlerz, the ultimate online platform for
                    exploring new people! Connect with fellow adventurers,
                    cultural enthusiasts, and globetrotters from around the
                    world. Expand your horizons, forge new friendships, and
                    embark on unforgettable journeys together. Start your
                    exploration today with Travlerz and discover the beauty of
                    connecting with like-minded individuals who share your
                    passion for travel and discovery.
                  </p>
                  <div className="flex gap-8">
                    <button className="bg-[#ff4838] hover:bg-transparent border border-[#ff4838] text-white hover:text-[#ff4838] font-bold px-10 py-2 duration-500">
                      View Adventure
                    </button>
                    <button className="hover:bg-[#ff4838] border border-[#ff4838] text-[#ff4838] hover:text-white font-bold px-10 py-2 duration-500">
                      Take a Tour
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex">
            <div className="w-full md:w-1/2 relative md:static">
              <img src={img4} className="w-full" />
              <h1 className="absolute top-1/2 right-0 left-0 text-center font-barlow text-3xl font-bold text-[#ff4838] mb-3 block md:hidden">
                Discover New <span className=" text-white">Places</span>
              </h1>
            </div>
            <div className="w-1/2 bg-bannerBg bg-cover bg-no-repeat hidden md:block">
              <div className="bg-[#131D4E] h-full bg-opacity-50 flex items-center pl-16">
                <div>
                  <h1 className=" font-barlow text-6xl font-bold text-[#ff4838] mb-3">
                    Discover New <span className=" text-white">Places</span>
                  </h1>
                  <p className="text-white max-w-2xl mb-5">
                    With Travlerz, you can easily browse through an extensive
                    collection of destination guides, insider tips, and
                    personalized recommendations. Whether you&apos;re seeking a
                    serene beach retreat, an adrenaline-pumping adventure, or a
                    cultural immersion, we&apos;ve got you covered. Our
                    dedicated team of travel enthusiasts scours the globe to
                    bring you the most captivating and off-the-beaten-path
                    experiences.
                  </p>
                  <div className="flex gap-8">
                    <button className="bg-[#ff4838] hover:bg-transparent border border-[#ff4838] text-white hover:text-[#ff4838] font-bold px-10 py-2 duration-500">
                      View Adventure
                    </button>
                    <button className="hover:bg-[#ff4838] border border-[#ff4838] text-[#ff4838] hover:text-white font-bold px-10 py-2 duration-500">
                      Take a Tour
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerSlider;
