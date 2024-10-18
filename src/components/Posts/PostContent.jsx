import postImg1 from "../../assets/post-img1.jpg";

const PostContent = () => {
  return (
    <div className="flex flex-col space-y-5">
      <p>
        I'm thrilled to share that I've completed a graduate certificate course
        in project management with the president's honor roll.
      </p>

      <img src={postImg1} className="w-full rounded-md" alt="post image" />
    </div>
  );
};
export default PostContent;
