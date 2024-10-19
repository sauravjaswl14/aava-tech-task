import Avatar from "../User/Avatar";
import { AiOutlineLogout } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { useGlobalContext } from "../../context";
import { useNavigate } from "react-router-dom";

const User = () => {
  const { user, logout, isLoggedIn } = useGlobalContext();

  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex space-x-8 items-center">
      {isLoggedIn ? (
        <div className="flex space-x-3 items-center">
          {/* Avatar */}
          <Avatar />
          <h4 className="font-semibold capitalize">
            {user.username || "John Doe"}
          </h4>
        </div>
      ) : null}

      {isLoggedIn === true && (
        <button
          onClick={handleClick}
          className="flex space-x-2 items-center py-2 px-5 border-2 border-[#645cff] rounded-md bg-white shadow-md"
        >
          <AiOutlineLogout />

          <span> Logout </span>
        </button>
      )}
      {isLoggedIn === false && (
        <button
          onClick={handleClick}
          className="flex space-x-2 items-center py-2 px-5 border-2 border-[#645cff] rounded-md bg-white shadow-md"
        >
          <AiOutlineLogin />

          <span> Login </span>
        </button>
      )}
    </div>
  );
};
export default User;
