import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const Profile = () => {
  const user = useLoaderData();
  console.log(user);
  return (
    <div>
      <Helmet>
        <title>Profile | Travlerz</title>
      </Helmet>
      <h1>User Profile Page </h1>
    </div>
  );
};

export default Profile;
