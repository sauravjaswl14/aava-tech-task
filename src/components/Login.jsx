import Logo from "./Navbar/Logo";
import LoginForm from "./Form/LoginForm";
import loginPageImg from "../assets/login-img.jpg";
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useGlobalContext();

  const navigate = useNavigate();
  return (
    <section className="w-full h-screen flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 h-full bg-white flex justify-center items-center">
        <div className="py-5 flex flex-col space-y-5 items-center text-center lg:py-0">
          <Logo />
          <h2 className="text-[#4f515b] text-2xl font-semibold">Welcome</h2>
          <p className="max-w-lg leading-snug ">
            Users can explore and engage with posts on the main feed, where they
            can share project updates, seek feedback, and discuss trending
            technologies.
          </p>
          <LoginForm login={login} navigate={navigate} />
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full">
        <img src={loginPageImg} className="h-full" alt="boy holding a tablet" />
      </div>
    </section>
  );
};
export default Login;
