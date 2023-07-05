import { Helmet } from "react-helmet-async";
import useAuth from "../Hooks/useAuth";

const Profile = () => {
  const user = useAuth();
  console.log(user);
  return (
    <div>
      <Helmet>
        <title>Profile | Travlerz</title>
      </Helmet>
      <h1>Welcome, {user?.displayName} </h1>
    </div>
  );
};

export default Profile;
