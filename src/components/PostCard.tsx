import { format } from "date-fns";

interface PostCardProps {
  title: string;
  content: string | null;
  tag: string;
  imageUrl: string | null;
  videoUrl: string | null;
  createdAt: string;
}

const tagStyles: Record<string, string> = {
  Academics: "bg-tag-academics/15 text-tag-academics",
  Athletics: "bg-tag-athletics/15 text-tag-athletics",
  Random: "bg-tag-random/15 text-tag-random",
};

const PostCard = ({ title, content, tag, imageUrl, videoUrl, createdAt }: PostCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden card-glow">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      )}
      {videoUrl && (
        <video src={videoUrl} controls className="w-full h-48 object-cover" />
      )}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${tagStyles[tag] || "bg-muted text-muted-foreground"}`}>
            {tag}
          </span>
          <span className="text-xs text-muted-foreground">
            {format(new Date(createdAt), "MMM d, yyyy")}
          </span>
        </div>
        <h3 className="font-display font-semibold text-foreground mb-1">{title}</h3>
        {content && <p className="text-sm text-muted-foreground line-clamp-3">{content}</p>}
      </div>
    </div>
  );
};

export default PostCard;
