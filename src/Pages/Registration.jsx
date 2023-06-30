import { Helmet } from "react-helmet-async";
import logo from "../assets/travlerz-logo.png";

const Registration = () => {
  return (
    <div className="bg-registerBg w-full h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center">
      <Helmet>
        <title>Registration | Travlerz</title>
      </Helmet>
      <div className="bg-white bg-opacity-40 w-[45rem] h-[40rem] md:h-[31rem] rounded-lg shadow-2xl">
        <div className="flex items-center justify-center my-1">
          <img src={logo} alt="Website Logo" className="w-48" />
        </div>
        <h1 className="text-2xl font-barlow font-bold mb-3 md:mb-5 text-center">
          Sign Up Now
        </h1>
        <div className="w-3/4 md:w-full mx-auto">
          <form className="flex flex-col gap-5 md:gap-8 px-5">
            <div className="flex flex-col md:flex-row items-center justify-center md:gap-8 w-full ">
              <div className="w-full md:w-1/2 flex flex-col md:gap-3">
                <div className="form-control">
                  <label htmlFor="name" className="font-barlow font-semibold">
                    Full Name :
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder=" Type Your Full Name"
                    className="p-1 focus:outline-none border border-[#131D4E] "
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="email" className="font-barlow font-semibold">
                    Email Address :
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder=" Type Your Email"
                    className="p-1 focus:outline-none border border-[#131D4E] "
                  />
                </div>
                <div className="form-control">
                  <label
                    htmlFor="password"
                    className="font-barlow font-semibold"
                  >
                    Password :
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder=" Type Your Password"
                    className="p-1 focus:outline-none border border-[#131D4E] "
                  />
                </div>
                <div className="form-control">
                  <label
                    htmlFor="confirmPassword"
                    className="font-barlow font-semibold"
                  >
                    Confirm Password :
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder=" Confirm Password"
                    className="p-1 focus:outline-none border border-[#131D4E] "
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col md:gap-3">
                <div className="form-control">
                  <label htmlFor="dob" className="font-barlow font-semibold">
                    Date of Birth :
                  </label>
                  <input
                    type="date"
                    name="dob"
                    className="p-1 focus:outline-none border border-[#131D4E] "
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="gender" className="font-barlow font-semibold">
                    Gender :
                  </label>
                  <select
                    name="gender"
                    className="p-1 focus:outline-none border border-[#131D4E] "
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
                    Country :
                  </label>
                  <input
                    type="text"
                    name="country"
                    placeholder=" Type Your Country"
                    className="p-1 focus:outline-none border border-[#131D4E] "
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="phone" className="font-barlow font-semibold">
                    Phone :
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder=" Your Phone Number"
                    className="p-1 focus:outline-none border border-[#131D4E] "
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
