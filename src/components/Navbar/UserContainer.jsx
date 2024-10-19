import ThemeToggle from "../../ThemeToggle";
import User from "./User";

const UserContainer = () => {
  return (
    <div className="hidden  lg:w-1/4 lg:flex justify-between items-center">
      <ThemeToggle />
      <User />
    </div>
  );
};
export default UserContainer;
