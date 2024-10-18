import { useState } from "react";
import { useGlobalContext } from "../../context";
import { AiFillLike } from "react-icons/ai";
import { BiRepost } from "react-icons/bi";

const LikesAndRepost = () => {
  const { likeCount, setLikeCount } = useGlobalContext();
  const [isPostReposted, setIsPostReposted] = useState(false);

  const handleClick = () => {
    setLikeCount((current) => current + 1);
  };

  const handleRepost = () => {
    setIsPostReposted((current) => !current);
  };

  return (
    <div className="w-full flex justify-between">
      {/* like button */}
      <button
        onClick={handleClick}
        className={`flex space-x-1 items-center hover:text-[#645cff] font-medium transition ease-in-out duration-200 ${
          likeCount > 0 ? "text-[#645cff]" : null
        }`}
      >
        <AiFillLike />
        <span>
          {likeCount > 0 ? "Liked" : "Like"} {`(${likeCount})`}
        </span>
      </button>
      {/* repost button */}
      <button
        onClick={handleRepost}
        className={`flex space-x-1 items-center font-medium hover:text-[#645cff]  transition ease-in-out duration-200 ${
          isPostReposted ? "text-[#645cff]" : null
        }`}
      >
        <BiRepost />
        <span>Repost</span>
      </button>
    </div>
  );
};
export default LikesAndRepost;
