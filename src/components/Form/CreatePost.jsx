import Avatar from "../Avatar";
import { FaImage } from "react-icons/fa";

const CreatePost = () => {
  return (
    <section className="my-20 w-full flex justify-center items-center">
      {/* main container */}
      <div className="w-[60%] bg-white p-5 rounded-md">
        <div className="flex flex-col space-y-8">
          <div className="flex space-x-5 items-center">
            {/* avatar */}
            <Avatar />
            <input
              type="text"
              placeholder="Share your thoughts..."
              className="border-none outline-none"
            />
          </div>

          <button className="w-fit p-2  bg-[#eef0f2] rounded-md flex space-x-2 items-center hover:scale-95 transition ease-in-out duration-200 ">
            <FaImage />
            <span className=" text-[#676a79] text-sm font-medium">Photo</span>
          </button>
        </div>
      </div>
    </section>
  );
};
export default CreatePost;
