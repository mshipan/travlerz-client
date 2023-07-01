import { Outlet } from "react-router-dom";
import DashboardNav from "../Components/DashboardNav/DashboardNav";

const DashboardLayout = () => {
  return (
    <div>
      <DashboardNav></DashboardNav>

      <Outlet></Outlet>
    </div>
  );
};

export default DashboardLayout;
