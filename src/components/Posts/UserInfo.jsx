import Avatar from "../User/Avatar";

const UserInfo = () => {
  return (
    <div className="flex space-x-5 items-center hover:cursor-pointer">
      <Avatar />
      <div className="flex flex-col space-y-2">
        <div className="flex space-x-3 items-center">
          {/* User name */}
          <h3 className="font-bold">John Doe</h3>
          <div className="w-[5px] h-[5px] rounded-full bg-gray-500"></div>
          <p className="text-[#676a79]">2 hours ago</p>
        </div>
        <h4>Web Developer at Webestica</h4>
      </div>
    </div>
  );
};
export default UserInfo;
