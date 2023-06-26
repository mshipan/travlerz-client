import { Outlet } from "react-router-dom";
import Navbar from "../Components/SharedCpmponents/Navbar";
import TopInfo from "../Components/TopInfo";
import Footer from "../Components/SharedCpmponents/Footer";
const MainLayouts = () => {
  return (
    <div>
      <div className="hidden md:block lg:block xl:block 2xl:block">
        <TopInfo />
      </div>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default MainLayouts;
