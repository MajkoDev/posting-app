import { parseISO, formatDistanceToNow } from "date-fns";

export default function Time({ timestamp }) {
  let timeAgo = "";

  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return (
    <span
      title={timestamp}
      className="py-1 px-2 m-1 bg-slate-400 rounded-md absolute -top-0.5 -right-0.5"
    >
      <p className="text-slate-50 text-xs">{timeAgo}</p>
    </span>
  );
}
