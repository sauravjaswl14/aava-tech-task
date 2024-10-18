import UserContainer from "./UserContainer";

const Navbar = () => {
  return (
    <nav className="sticky top-0 p-5 px-10 flex justify-between items-center shadow-b-md z-50">
      <div className="logo">
        <span>S</span>
      </div>

      <UserContainer />
    </nav>
  );
};
export default Navbar;
