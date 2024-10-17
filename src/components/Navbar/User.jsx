import Avatar from "../Avatar";

const User = () => {
  return (
    <div className="flex space-x-5 items-center">
      {/* Avatar */}
      <Avatar />

      <div className="flex space-x-5 items-center">
        <h4>John Doe</h4>
        <button>Logout</button>
      </div>
    </div>
  );
};
export default User;
