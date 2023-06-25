import { Outlet } from "react-router-dom";
import Navbar from "../Components/SharedCpmponents/Navbar";
import TopInfo from "../Components/TopInfo";

const MainLayouts = () => {
  return (
    <div>
      <div className="hidden md:block lg:block xl:block 2xl:block">
        <TopInfo />
      </div>
      <Navbar />
      <Outlet></Outlet>
      <h1>Footer</h1>
    </div>
  );
};

export default MainLayouts;
