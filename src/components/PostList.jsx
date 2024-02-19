import { useSelector } from "react-redux";
import { selectAllPosts } from "../redux/postsSlice";

import Icons from "./Icons";
import Author from "./Author";
import Time from "./Time";

export default function PostList() {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="w-screen px-6 lg:px-12">
      <div className="flex flex-wrap justify-center gap-2">
        {orderedPosts.map((post) => (
          <article
            className="relative w-[400px] p-2 m-2 shadow-lg rounded-md"
            key={post.id}
          >
            <h3 className="text-md font-semibold text-center my-2 text-slate-800">
              {post.title}
            </h3>
            <p className="text-sm font-light text-slate-600">
              {post.content.substring(0, 200)}
            </p>
            <div className="my-2 w-full flex flex-col justify-center items-center">
              <Author userId={post.user} />
              <Icons post={post} />
            </div>

            <Time timestamp={post.date} />
          </article>
        ))}
      </div>
    </div>
  );
}
