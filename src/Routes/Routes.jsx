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
import UpdateDestination from "../Pages/DashboardPages/UpdateDestination";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage />,
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
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
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
          fetch(`http://localhost:5000/user/${params.email}`),
      },
      {
        path: "add-a-package",
        element: <AddAPackage></AddAPackage>,
      },
      {
        path: "view-packages",
        element: <ViewAllPackages></ViewAllPackages>,
      },
      {
        path: "package/:id",
        element: <ViewSinglePackage></ViewSinglePackage>,
      },
      {
        path: "update-package/:id",
        element: <UpdatePackage></UpdatePackage>,
      },

      {
        path: "all-users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "add-a-destination",
        element: <AddADestination></AddADestination>,
      },
      {
        path: "view-destinations",
        element: <ViewAllDestination></ViewAllDestination>,
      },
      {
        path: "destination/:id",
        element: <ViewSingleDestionation></ViewSingleDestionation>,
      },

      {
        path: "update-destination/:id",
        element: <UpdateDestination></UpdateDestination>,
      },
      {
        path: "view-bookings",
        element: <ViewAllBookings></ViewAllBookings>,
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
          fetch(`http://localhost:5000/guide/${params.id}`),
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
