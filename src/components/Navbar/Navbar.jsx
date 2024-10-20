import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import UserContainer from "./UserContainer";

const Navbar = () => {
  return (
    <nav className="sticky top-0 p-5 px-10 flex justify-between items-center shadow-b-md z-50">
      <Logo />

      <NavLink
        className="font-medium hover:text-[#645cff] focus:text-[#645cff] transition ease-in-out duration-200"
        to="/docs"
      >
        Docs
      </NavLink>

      <UserContainer />
    </nav>
  );
};
export default Navbar;
