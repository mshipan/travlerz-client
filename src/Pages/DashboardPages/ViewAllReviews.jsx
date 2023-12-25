import { Helmet } from "react-helmet-async";
import useReview from "../../Hooks/useReview";
import { BsArrowRight } from "react-icons/bs";
import AllReviewsTable from "../../Components/DashboardComponents/AllReviewsTable";

const ViewAllReviews = () => {
  const [reviews] = useReview();
  console.log("first", reviews);
  return (
    <div className="my-16">
      <Helmet>
        <title>User Reviews | Dashboard</title>
      </Helmet>
      <div className="bg-packageBg bg-no-repeat bg-cover bg-fixed bg-bottom w-full h-48 flex items-center justify-center ">
        <h1 className="packageBannerText font-barlow text-4xl font-bold text-white drop-shadow-2xl">
          User Reviews
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
                <th className="border border-black">User Photo</th>
                <th className="border border-black">Package Name</th>
                <th className="border border-black">User Name</th>
                <th className="border border-black">Quality Rating</th>
                <th className="border border-black">Price Rating</th>
                <th className="border border-black">Service Rating</th>
                <th className="border border-black">Action</th>
              </tr>
            </thead>
            <tbody>
              <>
                {reviews.length > 0 ? (
                  reviews.map((singleReview, index) => (
                    <AllReviewsTable
                      key={singleReview._id}
                      singleReview={singleReview}
                      index={index}
                    ></AllReviewsTable>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      className="border border-black font-barlow text-red-500"
                    >
                      No reviews available
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

export default ViewAllReviews;
