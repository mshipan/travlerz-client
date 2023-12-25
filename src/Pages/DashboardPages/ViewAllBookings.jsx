import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { BsArrowRight } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";
import AllBookingsTable from "../../Components/DashboardComponents/AllBookingsTable";

const ViewAllBookings = () => {
  const allBookings = useLoaderData();
  const [bookings, setBookings] = useState(allBookings);

  return (
    <div className="my-16">
      <Helmet>
        <title>View all Bookings | Dashboard</title>
      </Helmet>
      <div className="bg-packageBg bg-no-repeat bg-cover bg-fixed bg-bottom w-full h-48 flex items-center justify-center ">
        <h1 className="packageBannerText font-barlow text-4xl font-bold text-white ">
          View all Bookings
        </h1>
      </div>
      <div className="md:w-2/3 px-5 md:px-0 mx-auto overflow-x-auto my-20">
        <p className="inline-flex items-center gap-1 md:hidden mb-1 text-sm">
          Scroll to right to view full data{" "}
          <BsArrowRight className="text-red-500" />
        </p>
        <div>
          <table className="table text-center">
            <thead className="border border-black text-white font-barlow">
              <tr>
                <th className="border border-black">#</th>
                <th className="border border-black">Package Title</th>
                <th className="border border-black">User Name</th>
                <th className="border border-black">Price</th>
                <th className="border border-black">Status</th>
                <th className="border border-black">Manage Status</th>
                <th className="border border-black">Action</th>
              </tr>
            </thead>
            <tbody>
              <>
                {bookings.map((booking, index) => (
                  <AllBookingsTable
                    key={booking._id}
                    booking={booking}
                    bookings={bookings}
                    setBookings={setBookings}
                    index={index}
                  ></AllBookingsTable>
                ))}
              </>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewAllBookings;
