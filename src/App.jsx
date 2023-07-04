import { useState, useEffect } from "react";
import { CircleLoader } from "react-spinners";
import AuthProvider from "./Providers/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    if (isFirstVisit) {
      setIsFirstVisit(false);
    } else {
      // Simulating data loading
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [isFirstVisit]);

  return (
    <div>
      {isLoading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <CircleLoader color="#131D4E" size={200} loading={isLoading} />
        </div>
      ) : (
        <AuthProvider>
          <HelmetProvider>
            <RouterProvider router={router} />
          </HelmetProvider>
        </AuthProvider>
      )}
    </div>
  );
};

export default App;
