import { useSelector } from "react-redux";
import Post from "./Post";

const Posts = () => {
  const { postsItems } = useSelector((store) => store.post);
  return (
    <section className="my-20 w-full flex flex-col space-y-5 justify-center items-center">
      {postsItems.map((item) => {
        return <Post key={item.id} {...item} />;
      })}
    </section>
  );
};
export default Posts;
