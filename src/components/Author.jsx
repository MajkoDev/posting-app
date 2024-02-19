import { useSelector } from "react-redux";
import { selectAllUsers } from "../redux/usersSlice";

export default function Author({ userId }) {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === userId);

  return (
    <span className="text-sm font-semibold text-slate-500 pt-2">
      by {author ? author.name : "Unknown author"}
    </span>
  );
}
