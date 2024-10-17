import ThemeToggle from "../../ThemeToggle";
import User from "./User";

const UserContainer = () => {
  return (
    <div className="w-1/4 flex justify-between items-center">
      <ThemeToggle />
      <User />
    </div>
  );
};
export default UserContainer;
