import { useState } from "react";
import { LuUser2 } from "react-icons/lu";
import { RiLockPasswordLine } from "react-icons/ri";
import { useGlobalContext } from "../../context";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { login } = useGlobalContext();

  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(newUser);
    if (!newUser.username || !newUser.password) {
      console.log("please provide required values");
    }
    setNewUser((prev) => {
      return { ...prev, username: "", password: "" };
    });

    login(newUser);
    navigate("/");
  };
  return (
    <>
      <form
        onSubmit={handleLogin}
        className="flex flex-col space-y-5 items-center"
      >
        <div className="w-[300px] rounded-full p-2 bg-[#f7f7f7] flex space-x-2 items-center">
          <div className="w-12 h-12  rounded-full bg-white flex justify-center items-center">
            <LuUser2 />
          </div>

          <input
            type="text"
            name="username"
            value={newUser.username}
            onChange={handleChange}
            placeholder="Emai or username"
            className=" border-none bg-transparent outline-none focus:outline-none"
          />
        </div>
        <div className="w-[300px] rounded-full p-2 bg-[#f7f7f7] flex space-x-2 items-center">
          <div className="w-12 h-12  rounded-full bg-white flex justify-center items-center">
            <RiLockPasswordLine />
          </div>

          <input
            type="password"
            name="password"
            value={newUser.password}
            onChange={handleChange}
            placeholder="Password"
            className=" border-none bg-transparent outline-none focus:outline-none"
          />
        </div>

        <button className="py-3 px-5 w-fit bg-[#837dff] text-white rounded-full hover:bg-[#645cff] transition ease-in-out duration-200">
          Login
        </button>
      </form>
    </>
  );
};
export default LoginForm;
