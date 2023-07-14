import BannerSlider from "../Components/HomeComponents/BannerSlider";
import { Helmet } from "react-helmet-async";
import PopularPackage from "../Components/HomeComponents/PopularPackage";
import ExploreDestination from "../Components/HomeComponents/ExploreDestination";
import OurSuccessReport from "../Components/HomeComponents/OurSuccessReport";
import OurGallery from "../Components/HomeComponents/OurGallery";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Travlerz</title>
      </Helmet>
      <BannerSlider></BannerSlider>
      <PopularPackage></PopularPackage>
      <ExploreDestination></ExploreDestination>
      <OurSuccessReport></OurSuccessReport>
      <OurGallery></OurGallery>
    </div>
  );
};

export default Home;
