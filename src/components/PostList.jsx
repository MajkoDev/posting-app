import { useSelector } from "react-redux";
import { selectAllPosts } from "../redux/postsSlice";

export default function PostList() {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="px-6 md:px-12 lg:px-24">
      <div className="flex flex-wrap justify-center gap-2">
        {orderedPosts.map((post) => (
          <article
            className="w-[400px] p-2 m-2 shadow-lg rounded-md"
            key={post.id}
          >
            <h3 className="text-md text-center mb-1 text-slate-800">
              {post.title}
            </h3>
            <p className="text-sm font-light text-slate-600">
              {post.content.substring(0, 200)}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
