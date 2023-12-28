import { Helmet } from "react-helmet-async";
import { BsArrowRight } from "react-icons/bs";
import useAuth from "../../Hooks/useAuth";
import MyBookingTable from "../../Components/DashboardComponents/MyBookingTable";
import { useGetBookingsByUidQuery } from "../../redux/features/api/baseApi";

const MyBookings = () => {
  const { user } = useAuth();

  const {
    data: booking,
    isLoading,
    isError,
    error,
  } = useGetBookingsByUidQuery(user?.uid);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading my bookings: {error.message}</div>;
  }

  if (!booking) {
    return <div>My Bookings not found</div>;
  }

  return (
    <div className="my-16">
      <Helmet>
        <title>My Bookings | Dashboard</title>
      </Helmet>
      <div className="bg-packageBg bg-no-repeat bg-cover bg-fixed bg-bottom w-full h-48 flex items-center justify-center ">
        <h1 className="packageBannerText font-barlow text-4xl font-bold text-white drop-shadow-2xl">
          My Bookings
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
                <th className="border border-black">Action</th>
              </tr>
            </thead>
            <tbody>
              <>
                {booking.length > 0 ? (
                  booking?.map((book, index) => (
                    <MyBookingTable
                      key={book._id}
                      book={book}
                      index={index}
                    ></MyBookingTable>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      className="border border-black font-barlow text-red-500"
                    >
                      No bookings available
                    </td>
                  </tr>
                )}
              </>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
