import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Destination from "../Pages/Destination";
import ContactUs from "../Pages/ContactUs";
import AboutUs from "../Pages/AboutUs";
import Profile from "../Pages/Profile";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import DashboardLayout from "../Layouts/DashboardLayout";
import AddAPackage from "../Pages/DashboardPages/AddAPackage";
import ViewAllPackages from "../Pages/DashboardPages/ViewAllPackages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/destinations",
        element: <Destination></Destination>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,
        element: <h1>Hello, John Doe</h1>,
      },
      {
        path: "my-profile",
        element: <Profile></Profile>,
      },
      {
        path: "add-a-package",
        element: <AddAPackage></AddAPackage>,
      },
      {
        path: "view-packages",
        element: <ViewAllPackages></ViewAllPackages>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/registration",
    element: <Registration></Registration>,
  },
]);

export default router;
