import BannerSlider from "../Components/HomeComponents/BannerSlider";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Travlerz</title>
      </Helmet>
      <BannerSlider></BannerSlider>
    </div>
  );
};

export default Home;
