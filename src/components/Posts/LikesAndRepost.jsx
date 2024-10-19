import { AiFillLike } from "react-icons/ai";
import { BiRepost } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {
  increaseLikesCount,
  increaseRepostCount,
} from "../../features/post/postSlice";

const LikesAndRepost = ({ id, like_count, repost_count }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full flex justify-between">
      {/* like button */}
      <button
        onClick={() => dispatch(increaseLikesCount({ id }))}
        className={`flex space-x-1 items-center hover:text-[#645cff] font-medium transition ease-in-out duration-200 ${
          like_count > 0 ? "text-[#645cff]" : null
        }`}
      >
        <AiFillLike />
        <span>
          {like_count > 0 ? "Liked" : "Like"}{" "}
          {like_count > 0 ? `(${like_count})` : null}
        </span>
      </button>
      {/* repost button */}
      <button
        onClick={() => dispatch(increaseRepostCount({ id }))}
        className={`flex space-x-1 items-center font-medium hover:text-[#645cff]  transition ease-in-out duration-200 ${
          repost_count ? "text-[#645cff]" : null
        }`}
      >
        <BiRepost />
        <span>
          {repost_count > 0 ? "Reposted" : "Repost"}{" "}
          {repost_count > 0 ? `(${repost_count})` : null}
        </span>
      </button>
    </div>
  );
};
export default LikesAndRepost;
