import UserContainer from "./UserContainer";

const Navbar = () => {
  return (
    <nav className="p-5 px-10 flex justify-between items-center shadow-b-md">
      <div className="logo">
        <span>S</span>
      </div>

      <UserContainer />
    </nav>
  );
};
export default Navbar;
