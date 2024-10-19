import Avatar from "../User/Avatar";

const UserInfo = ({ name, created_at, work_title }) => {
  return (
    <div className="flex space-x-5 items-center hover:cursor-pointer">
      <Avatar />
      <div className="flex flex-col space-y-2">
        <div className="flex space-x-3 items-center">
          {/* User name */}
          <h3 className="font-bold">{name}</h3>
          <div className="w-[5px] h-[5px] rounded-full bg-gray-500"></div>
          <p className="text-[#676a79]">{created_at}</p>
        </div>
        <h4>{work_title}</h4>
      </div>
    </div>
  );
};
export default UserInfo;
