import { useEffect, useState } from "react";
import Avatar from "../User/Avatar";
import { FaImage } from "react-icons/fa";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../features/modal/modalSlice";
import { setGlobalTitle } from "../../features/post/postSlice";

const CreatePost = () => {
  const { isModalOpen } = useSelector((store) => store.modal);

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  useEffect(() => {
    dispatch(setGlobalTitle({ title }));
  }, [title]);

  return (
    <section className="my-20 w-full flex justify-center items-center">
      {/* main container */}
      <div className="w-[60%] bg-white p-5 rounded-md write-post-container-shadow">
        <div className="flex flex-col space-y-8">
          <div className="flex space-x-5 items-center">
            {/* avatar */}
            <Avatar />
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.currentTarget.value)}
              placeholder="Share your thoughts..."
              className="border-none outline-none"
            />
          </div>

          <button
            onClick={() => dispatch(openModal())}
            className="w-fit p-2  bg-[#eef0f2] rounded-md flex space-x-2 items-center hover:scale-95 transition ease-in-out duration-200 "
          >
            <FaImage />
            <span className=" text-[#676a79] text-sm font-medium">Photo</span>
          </button>
        </div>
      </div>

      {isModalOpen && <Modal />}
    </section>
  );
};
export default CreatePost;
