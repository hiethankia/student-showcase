import { useState } from "react";
import { format } from "date-fns";
import { ChevronDown, ChevronUp } from "lucide-react";

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
  const [expanded, setExpanded] = useState(false);
  const isLong = content && content.length > 200;

  return (
    <div
      className="bg-card border border-border rounded-lg overflow-hidden card-glow cursor-pointer transition-all"
      onClick={() => isLong && setExpanded(!expanded)}
    >
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      )}
      {videoUrl && (
        <video src={videoUrl} controls className="w-full h-48 object-cover" onClick={(e) => e.stopPropagation()} />
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
        {content && (
          <p className={`text-sm text-muted-foreground whitespace-pre-line ${!expanded && isLong ? "line-clamp-3" : ""}`}>
            {content}
          </p>
        )}
        {isLong && (
          <button
            onClick={(e) => { e.stopPropagation(); setExpanded(!expanded); }}
            className="flex items-center gap-1 text-xs text-primary mt-2 hover:opacity-80 transition-opacity"
          >
            {expanded ? (
              <>Show less <ChevronUp size={14} /></>
            ) : (
              <>Read more <ChevronDown size={14} /></>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default PostCard;
