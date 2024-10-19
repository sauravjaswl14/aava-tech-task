import UserInfo from "./UserInfo";
import LikesAndRepost from "./LikesAndRepost";
import PostContent from "./PostContent";

const Post = ({
  id,
  name,
  created_at,
  work_title,
  title,
  image,
  like_count,
  repost_count,
}) => {
  return (
    <div className="w-[60%] bg-white p-5 rounded-md flex flex-col space-y-6 post-container-shadow">
      <UserInfo name={name} created_at={created_at} work_title={work_title} />
      <PostContent title={title} name={name} image={image} />
      <LikesAndRepost
        id={id}
        like_count={like_count}
        repost_count={repost_count}
      />
    </div>
  );
};
export default Post;
