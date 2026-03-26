import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { Settings } from "lucide-react";

const tags = ["All", "Academics", "Athletics", "Random"];

interface Post {
  id: string;
  title: string;
  content: string | null;
  tag: string;
  image_url: string | null;
  video_url: string | null;
  created_at: string;
}

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [activeTag, setActiveTag] = useState("All");

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase.from("posts").select("*").order("created_at", { ascending: false });
      if (data) setPosts(data);
    };
    fetchPosts();
  }, []);

  const filtered = activeTag === "All" ? posts : posts.filter((p) => p.tag === activeTag);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">Posts</h1>
          <p className="text-muted-foreground mb-8">Updates, thoughts, and highlights.</p>

          {/* Filter tabs */}
          <div className="flex gap-2 mb-8 flex-wrap">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeTag === tag
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              No posts yet. Check back later.
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-4">
              {filtered.map((post) => (
                <PostCard
                  key={post.id}
                  title={post.title}
                  content={post.content}
                  tag={post.tag}
                  imageUrl={post.image_url}
                  videoUrl={post.video_url}
                  createdAt={post.created_at}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Posts;
