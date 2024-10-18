import UserInfo from "./UserInfo";
import LikesAndRepost from "./LikesAndRepost";
import PostContent from "./PostContent";

const Post = () => {
  return (
    <div className="w-[60%] bg-white p-5 rounded-md flex flex-col space-y-6 post-container-shadow">
      <UserInfo />
      <PostContent />
      <LikesAndRepost />
    </div>
  );
};
export default Post;
