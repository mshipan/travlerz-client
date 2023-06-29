import { Helmet } from "react-helmet-async";

const Registration = () => {
  return (
    <div className="bg-registerBg w-full h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center">
      <Helmet>
        <title>Registration | Travlerz</title>
      </Helmet>
      <div className="bg-white bg-opacity-40 w-[45rem] h-[30rem] rounded-lg shadow-2xl">
        <h1 className="text-2xl font-barlow font-bold my-5 text-center">
          Sign Up Now
        </h1>
      </div>
    </div>
  );
};

export default Registration;
