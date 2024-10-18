import { useState } from "react";
import Avatar from "../User/Avatar";
import { FaImage } from "react-icons/fa";
import Modal from "./Modal";

const CreatePost = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
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
              placeholder="Share your thoughts..."
              className="border-none outline-none"
            />
          </div>

          <button
            onClick={openModal}
            className="w-fit p-2  bg-[#eef0f2] rounded-md flex space-x-2 items-center hover:scale-95 transition ease-in-out duration-200 "
          >
            <FaImage />
            <span className=" text-[#676a79] text-sm font-medium">Photo</span>
          </button>
        </div>
      </div>

      {isModalOpen && <Modal closeModal={closeModal} />}
    </section>
  );
};
export default CreatePost;
