import postImg1 from "../../assets/post-img1.jpg";

const PostContent = ({ title, name, image }) => {
  return (
    <div className="flex flex-col space-y-5">
      <p>{title}</p>

      <img src={image} className="w-full rounded-md" alt={name} />
    </div>
  );
};
export default PostContent;
