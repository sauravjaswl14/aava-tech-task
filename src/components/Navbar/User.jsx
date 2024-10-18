import Avatar from "../User/Avatar";
import { AiOutlineLogout } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { useGlobalContext } from "../../context";

const User = () => {
  const { isLoggedIn, setIsLoggedIn } = useGlobalContext();
  return (
    <div className="flex space-x-8 items-center">
      <div className="flex space-x-3 items-center">
        {/* Avatar */}
        <Avatar />
        <h4 className="font-semibold">John Doe</h4>
      </div>

      <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        className="flex space-x-2 items-center py-2 px-5 border-2 border-[#645cff] rounded-md bg-white shadow-md"
      >
        {isLoggedIn ? <AiOutlineLogout /> : <AiOutlineLogin />}

        <span>{isLoggedIn ? "Logout" : "Login"}</span>
      </button>
    </div>
  );
};
export default User;
