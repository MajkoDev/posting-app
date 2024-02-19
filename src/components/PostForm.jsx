import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../redux/usersSlice";

export default function PostForm() {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState("");
  const [content, setContent] = useState("");

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const onSavePostClick = () => {
    if (title && content) {
      console.log(title, content, userId);
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="flex justify-center">
      <form className="flex flex-col justify-center items-center">
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="my-2 p-2 rounded-md w-80"
          placeholder="Title"
        />
        <select
          id="postAuthor"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="my-2 p-2 rounded-md w-80"
        >
          <option value=""></option>
          {usersOptions}
        </select>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="my-2 p-2 rounded-md w-96 min-h-44"
          placeholder="Content"
        />
        <button
          type="button"
          disabled={!canSave}
          onClick={onSavePostClick}
          className="cursor-pointer py-2 px-6 text-white bg-slate-800 rounded-md border-2 m-3 hover:bg-slate-600"
        >
          Save Post
        </button>
      </form>
    </div>
  );
}
