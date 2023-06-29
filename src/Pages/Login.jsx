import { Helmet } from "react-helmet-async";

const Login = () => {
  return (
    <div className="bg-loginBg w-full h-screen bg-no-repeat bg-cover bg-bottom">
      <Helmet>
        <title>Login | Travlerz</title>
      </Helmet>
      <h1>Login Page</h1>
    </div>
  );
};

export default Login;
