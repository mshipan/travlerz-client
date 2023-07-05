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
import AllUsers from "../Pages/DashboardPages/AllUsers";
import ViewSinglePackage from "../Pages/DashboardPages/ViewSinglePackage";
import UpdatePackage from "../Pages/DashboardPages/UpdatePackage";
import AddADestination from "../Pages/DashboardPages/AddADestination";
import ViewAllDestination from "../Pages/DashboardPages/ViewAllDestination";

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
        path: "my-profile/:email",
        element: <Profile></Profile>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/user/${params.email}`),
      },
      {
        path: "add-a-package",
        element: <AddAPackage></AddAPackage>,
      },
      {
        path: "view-packages",
        element: <ViewAllPackages></ViewAllPackages>,
        loader: () => fetch("http://localhost:5000/packages"),
      },
      {
        path: "package/:id",
        element: <ViewSinglePackage></ViewSinglePackage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/package/${params.id}`),
      },
      {
        path: "update-package/:id",
        element: <UpdatePackage></UpdatePackage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/package/${params.id}`),
      },

      {
        path: "all-users",
        element: <AllUsers></AllUsers>,
        loader: () => fetch("http://localhost:5000/users"),
      },
      {
        path: "add-a-destination",
        element: <AddADestination></AddADestination>,
      },
      {
        path: "view-destinations",
        element: <ViewAllDestination></ViewAllDestination>,
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
