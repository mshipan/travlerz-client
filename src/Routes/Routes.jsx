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
import ViewSingleDestionation from "../Pages/DashboardPages/ViewSingleDestionation";
import Packages from "../Pages/Packages";
import SinglePackage from "../Pages/SinglePackage";
import ViewAllBookings from "../Pages/DashboardPages/ViewAllBookings";
import SingleDestination from "../Pages/SingleDestination";
import PrivateRoute from "./PrivateRoute";
import MyBookings from "../Pages/DashboardPages/MyBookings";
import MyReviews from "../Pages/DashboardPages/MyReviews";
import ViewAllReviews from "../Pages/DashboardPages/ViewAllReviews";
import UpdateProfile from "../Pages/DashboardPages/UpdateProfile";
import AddAGuide from "../Pages/DashboardPages/AddAGuide";
import ViewAllGuides from "../Pages/DashboardPages/ViewAllGuides";
import UpdateGuide from "../Pages/DashboardPages/UpdateGuide";

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
        path: "/destination/:id",
        element: (
          <PrivateRoute>
            <SingleDestination></SingleDestination>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://travlerz-server-5s80t1gwz-mshipan.vercel.app/destination/${params.id}`
          ),
      },
      {
        path: "/packages",
        element: <Packages></Packages>,
      },
      {
        path: "/package/:id",
        element: (
          <PrivateRoute>
            <SinglePackage></SinglePackage>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://travlerz-server-5s80t1gwz-mshipan.vercel.app/package/${params.id}`
          ),
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
        path: "update-profile",
        element: <UpdateProfile></UpdateProfile>,
        loader: ({ params }) =>
          fetch(
            `https://travlerz-server-5s80t1gwz-mshipan.vercel.app/user/${params.email}`
          ),
      },
      {
        path: "add-a-package",
        element: <AddAPackage></AddAPackage>,
      },
      {
        path: "view-packages",
        element: <ViewAllPackages></ViewAllPackages>,
        loader: () =>
          fetch(
            "https://travlerz-server-5s80t1gwz-mshipan.vercel.app/packages"
          ),
      },
      {
        path: "package/:id",
        element: <ViewSinglePackage></ViewSinglePackage>,
        loader: ({ params }) =>
          fetch(
            `https://travlerz-server-5s80t1gwz-mshipan.vercel.app/package/${params.id}`
          ),
      },
      {
        path: "update-package/:id",
        element: <UpdatePackage></UpdatePackage>,
        loader: ({ params }) =>
          fetch(
            `https://travlerz-server-5s80t1gwz-mshipan.vercel.app/package/${params.id}`
          ),
      },

      {
        path: "all-users",
        element: <AllUsers></AllUsers>,
        loader: () =>
          fetch("https://travlerz-server-5s80t1gwz-mshipan.vercel.app/users"),
      },
      {
        path: "add-a-destination",
        element: <AddADestination></AddADestination>,
      },
      {
        path: "view-destinations",
        element: <ViewAllDestination></ViewAllDestination>,
        loader: () =>
          fetch(
            "https://travlerz-server-5s80t1gwz-mshipan.vercel.app/destinations"
          ),
      },
      {
        path: "destination/:id",
        element: <ViewSingleDestionation></ViewSingleDestionation>,
        loader: ({ params }) =>
          fetch(
            `https://travlerz-server-5s80t1gwz-mshipan.vercel.app/destination/${params.id}`
          ),
      },

      {
        path: "update-destination/:id",
        element: <UpdatePackage></UpdatePackage>,
        loader: ({ params }) =>
          fetch(
            `https://travlerz-server-5s80t1gwz-mshipan.vercel.app/destination/${params.id}`
          ),
      },
      {
        path: "view-bookings",
        element: <ViewAllBookings></ViewAllBookings>,
        loader: () =>
          fetch(
            "https://travlerz-server-5s80t1gwz-mshipan.vercel.app/bookings"
          ),
      },
      {
        path: "my-bookings",
        element: <MyBookings></MyBookings>,
      },
      {
        path: "my-reviews",
        element: <MyReviews></MyReviews>,
      },
      {
        path: "view-all-reviews",
        element: <ViewAllReviews></ViewAllReviews>,
      },
      {
        path: "add-a-guide",
        element: <AddAGuide></AddAGuide>,
      },
      {
        path: "view-all-guides",
        element: <ViewAllGuides></ViewAllGuides>,
      },
      {
        path: "update-guide/:id",
        element: <UpdateGuide></UpdateGuide>,
        loader: ({ params }) =>
          fetch(
            `https://travlerz-server-5s80t1gwz-mshipan.vercel.app/guide/${params.id}`
          ),
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
