import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      const newUser = {
        name: loggedUser.displayName,
        email: loggedUser.email,
        photo: loggedUser.photoURL,
        // ToDO: here i would be put password: data.password if needed
        dob: "",
        gender: "",
        country: "",
        phone: "",
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };
  return (
    <>
      <button
        onClick={handleGoogleSignIn}
        className="flex items-center gap-1 text-lg bg-[#131D4E] text-white px-5 py-1"
      >
        <FcGoogle className="text-2xl" /> Google
      </button>
    </>
  );
};

export default SocialLogin;
