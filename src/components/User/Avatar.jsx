import { FaRegUser } from "react-icons/fa6";
import { IconContext } from "react-icons";

const Avatar = () => {
  return (
    <IconContext.Provider value={{ color: "white" }}>
      <div className="w-10 h-10 rounded-full flex justify-center items-center bg-[#a29dff] hover:cursor-pointer">
        <FaRegUser />
      </div>
    </IconContext.Provider>
  );
};
export default Avatar;
