import { useDispatch } from "react-redux";

import {
  HandThumbDownIcon,
  HandThumbUpIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import { reactionAdded } from "../redux/postsSlice";

const icons = {
  thumbsUp: <HandThumbUpIcon className="w-6 h-6" />,
  thumbsDown: <HandThumbDownIcon className="w-6 h-6" />,
  heart: <HeartIcon className="w-6 h-6" />,
};

export default function Icons({ post }) {
  const dispatch = useDispatch();

  const iconsButtons = Object.entries(icons).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
        className=" hover:bg-slate-200 py-1 px-2 rounded-md flex flex-row gap-1"
      >
        {emoji}
        <span className="text-slate-600 font-semibold">
          {post.reactions[name]}
        </span>
      </button>
    );
  });

  return <div className="flex flex-row gap-0.5">{iconsButtons}</div>;
}
