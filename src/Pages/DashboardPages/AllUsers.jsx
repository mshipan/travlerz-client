import { Helmet } from "react-helmet-async";
import { BsArrowRight } from "react-icons/bs";
import AllUsersTable from "../../Components/DashboardComponents/AllUsersTable";
import { useGetAllUsersQuery } from "../../redux/features/api/baseApi";

const AllUsers = () => {
  // const loggedUsers = useLoaderData();
  const { data: allUsers, isLoading, isError, error } = useGetAllUsersQuery();
  // const [allUsers, setAllUsers] = useState(loggedUsers);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading package: {error.message}</div>;
  }

  if (!allUsers) {
    return <div>Package not found</div>;
  }

  return (
    <div className="my-16">
      <Helmet>
        <title>All Users | Dashboard</title>
      </Helmet>
      <div className="bg-packageBg bg-no-repeat bg-cover bg-fixed bg-bottom w-full h-48 flex items-center justify-center ">
        <h1 className="packageBannerText font-barlow text-4xl font-bold text-white ">
          View all Users
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
                <th className="border border-black">User Name</th>
                <th className="border border-black">User Email</th>
                <th className="border border-black">User Role</th>
                <th className="border border-black">Manage Role</th>
                <th className="border border-black">Action</th>
              </tr>
            </thead>
            <tbody>
              <>
                {allUsers?.map((user, index) => (
                  <AllUsersTable
                    key={index}
                    user={user}
                    allUsers={allUsers}
                    // setAllUsers={setAllUsers}
                    index={index}
                  ></AllUsersTable>
                ))}
              </>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
