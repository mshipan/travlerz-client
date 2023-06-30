import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/travlerz-logo.png";
import SocialLogin from "../Components/SharedCpmponents/SocialLogin";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useContext(AuthContext);

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "LoggedIn Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="bg-loginBg w-full min-h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center">
      <Helmet>
        <title>Registration | Travlerz</title>
      </Helmet>
      <div className="bg-white bg-opacity-40 md:w-4/6 lg:w-3/6 p-1 m-5 rounded-lg shadow-2xl flex flex-col items-center justify-center">
        <div className="flex items-center justify-center my-1">
          <img src={logo} alt="Website Logo" className="w-48" />
        </div>
        <h1 className="text-2xl font-barlow font-bold mb-3 md:mb-5 text-center">
          Sign In with
        </h1>
        <div>
          <SocialLogin></SocialLogin>
        </div>
        <div className="divider w-1/2 mx-auto text-xl font-barlow my-5">OR</div>
        <div className="w-full md:mx-auto ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3 md:gap-8 px-5"
          >
            <div className="flex flex-col md:flex-row items-center justify-center md:gap-8 w-full ">
              <div className="w-full md:w-1/2 flex flex-col md:gap-3">
                <p className="text-red-600">{errorMessage}</p>
                <div className="form-control">
                  <label htmlFor="email" className="font-barlow font-semibold">
                    Email Address :{" "}
                    {errors.email && (
                      <span className="text-red-500">Email is required</span>
                    )}
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder=" Type Your Email"
                    className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="form-control">
                  <label
                    htmlFor="password"
                    className="font-barlow font-semibold"
                  >
                    Password :{" "}
                    {errors.password && (
                      <span className="text-red-500">
                        {errors.password.type === "required" &&
                          "Password is required"}
                      </span>
                    )}
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder=" Type Your Password"
                    className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                    {...register("password", { required: true })}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <input
                type="submit"
                value="Sign In"
                className="px-5 py-2 border border-[#131D4E] bg-[#131D4E] hover:bg-white text-white hover:text-[#131D4E] duration-500 font-barlow font-bold cursor-pointer"
              />
            </div>
            <div className="flex items-center justify-center mb-1">
              <p className="font-barlow md:text-lg font-semibold">
                Don&apos;t have an account?{" "}
                <span className="italic bg-blue-500 px-1 text-white">
                  Please{" "}
                  <Link
                    to="/registration"
                    className="underline hover:no-underline"
                  >
                    register.
                  </Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
