import { Helmet } from "react-helmet-async";
import logo from "../assets/travlerz-logo.png";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";

const Registration = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-registerBg w-full min-h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center">
      <Helmet>
        <title>Registration | Travlerz</title>
      </Helmet>
      <div className="bg-white bg-opacity-40 md:w-4/6 lg:w-3/6 p-1 m-5 rounded-lg shadow-2xl flex flex-col items-center justify-center">
        <div className="flex items-center justify-center my-1">
          <img src={logo} alt="Website Logo" className="w-48" />
        </div>
        <h1 className="text-2xl font-barlow font-bold mb-3 md:mb-5 text-center">
          Sign Up with
        </h1>
        <div>
          <button className="flex items-center gap-1 text-lg bg-[#131D4E] text-white px-5 py-1">
            <FcGoogle className="text-2xl" /> Google
          </button>
        </div>
        <div className="divider w-1/2 mx-auto text-xl font-barlow my-5">OR</div>
        <div className="w-full md:mx-auto ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3 md:gap-8 px-5"
          >
            <div className="flex flex-col md:flex-row items-center justify-center md:gap-8 w-full ">
              <div className="w-full md:w-1/2 flex flex-col md:gap-3">
                <div className="form-control">
                  <label htmlFor="name" className="font-barlow font-semibold">
                    Full Name :{" "}
                    {errors.name && (
                      <span className="text-red-500">Name is required</span>
                    )}
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder=" Type Your Full Name"
                    className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                    {...register("name", { required: true })}
                  />
                </div>
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
                        {errors.password.type === "minLength" &&
                          "Password must be at least 6 characters long"}
                        {errors.password.type === "pattern" &&
                          "Password must contain at least one uppercase, one lowercase letter, one number and one special character"}
                      </span>
                    )}
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder=" Type Your Password"
                    className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                  />
                </div>
                <div className="form-control">
                  <label
                    htmlFor="confirmPassword"
                    className="font-barlow font-semibold"
                  >
                    Confirm Password :{" "}
                    {errors.confirmPassword && (
                      <span className="text-red-500">
                        Password Do not match
                      </span>
                    )}
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder=" Confirm Password"
                    className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                    {...register("confirmPassword", {
                      required: true,
                      validate: (value) => value === watch("password"),
                    })}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col md:gap-3">
                <div className="form-control">
                  <label htmlFor="dob" className="font-barlow font-semibold">
                    Date of Birth :{" "}
                    {errors.dob && (
                      <span className="text-red-500">
                        Date of Birth is required
                      </span>
                    )}
                  </label>
                  <input
                    type="date"
                    name="dob"
                    className="p-1 focus:outline-none border border-[#131D4E] "
                    {...register("dob", { required: true })}
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="gender" className="font-barlow font-semibold">
                    Gender :{" "}
                    {errors.gender && (
                      <span className="text-red-500">Gender is required</span>
                    )}
                  </label>
                  <select
                    name="gender"
                    className="p-1 focus:outline-none border border-[#131D4E] "
                    {...register("gender", { required: true })}
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-control">
                  <label
                    htmlFor="country"
                    className="font-barlow font-semibold"
                  >
                    Country :{" "}
                    {errors.country && (
                      <span className="text-red-500">Country is required</span>
                    )}
                  </label>
                  <input
                    type="text"
                    name="country"
                    placeholder=" Type Your Country"
                    className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                    {...register("country", { required: true })}
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="phone" className="font-barlow font-semibold">
                    Phone :{" "}
                    {errors.phone && (
                      <span className="text-red-500">Phone is required</span>
                    )}
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder=" Your Phone Number"
                    className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                    {...register("phone", { required: true })}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <input
                type="submit"
                value="Sign Up"
                className="px-5 py-2 border border-[#131D4E] bg-[#131D4E] hover:bg-white text-white hover:text-[#131D4E] duration-500 font-barlow font-bold cursor-pointer"
              />
            </div>
            <div className="flex items-center justify-center mb-1">
              <p className="font-barlow md:text-lg font-semibold">
                Already have an account?{" "}
                <span className="italic bg-blue-500 px-1 text-white">
                  Please{" "}
                  <Link to="/login" className="underline hover:no-underline">
                    Login.
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

export default Registration;
