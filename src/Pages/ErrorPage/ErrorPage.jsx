import Lottie from "lottie-react";
import errAnim from "../../assets/ErrorAnimation.json";
import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div>
        <Lottie animationData={errAnim} loop={true} />
      </div>
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-barlow text-3xl text-white">
          Satus: {status || 404}
        </h1>
        <p className="font-serif text-lg text-red-500">{error.message}</p>
        <div>
          <Link to="/">
            <button className="bg-[#c25934] hover:bg-[#0c4b65] px-5 py-2 font-OpenSans uppercase font-bold text-white  transition duration-300 rounded-sm cursor-pointer">
              Back to Home Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
