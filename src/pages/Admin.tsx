import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Trash2, Plus, LogOut, Save } from "lucide-react";

interface Post {
  id: string;
  title: string;
  content: string | null;
  tag: string;
  image_url: string | null;
  video_url: string | null;
  created_at: string;
}

interface Grade {
  id: string;
  subject: string;
  grade_letter: string;
  percentage: number;
}

const ADMIN_CODE = "GodIsGreat";

const Admin = () => {
  const [authed, setAuthed] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  // Posts
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("Academics");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [posting, setPosting] = useState(false);

  // Grades
  const [grades, setGrades] = useState<Grade[]>([]);
  const [savingGrades, setSavingGrades] = useState(false);

  const handleLogin = () => {
    if (code === ADMIN_CODE) {
      setAuthed(true);
      setError("");
      sessionStorage.setItem("admin_auth", "true");
    } else {
      setError("Incorrect code.");
    }
  };

  const handleLogout = () => {
    setAuthed(false);
    sessionStorage.removeItem("admin_auth");
  };

  useEffect(() => {
    if (sessionStorage.getItem("admin_auth") === "true") {
      setAuthed(true);
    }
  }, []);

  useEffect(() => {
    if (!authed) return;
    fetchPosts();
    fetchGrades();
  }, [authed]);

  const fetchPosts = async () => {
    const { data } = await supabase.from("posts").select("*").order("created_at", { ascending: false });
    if (data) setPosts(data);
  };

  const fetchGrades = async () => {
    const { data } = await supabase.from("grades").select("*").order("subject");
    if (data) setGrades(data);
  };

  const uploadFile = async (file: File, folder: string) => {
    const ext = file.name.split(".").pop();
    const path = `${folder}/${Date.now()}.${ext}`;
    const { error } = await supabase.storage.from("media").upload(path, file);
    if (error) throw error;
    const { data: urlData } = supabase.storage.from("media").getPublicUrl(path);
    return urlData.publicUrl;
  };

  const createPost = async () => {
    if (!title.trim()) return;
    setPosting(true);
    try {
      let imageUrl: string | null = null;
      let videoUrl: string | null = null;

      if (imageFile) imageUrl = await uploadFile(imageFile, "images");
      if (videoFile) videoUrl = await uploadFile(videoFile, "videos");

      await supabase.from("posts").insert({
        title: title.trim(),
        content: content.trim() || null,
        tag,
        image_url: imageUrl,
        video_url: videoUrl,
      });

      setTitle("");
      setContent("");
      setTag("Academics");
      setImageFile(null);
      setVideoFile(null);
      fetchPosts();
    } catch (err) {
      console.error(err);
    }
    setPosting(false);
  };

  const deletePost = async (id: string) => {
    await supabase.from("posts").delete().eq("id", id);
    fetchPosts();
  };

  const updateGradeField = (id: string, field: string, value: string) => {
    setGrades((prev) =>
      prev.map((g) =>
        g.id === id
          ? { ...g, [field]: field === "percentage" ? parseFloat(value) || 0 : value }
          : g
      )
    );
  };

  const saveGrades = async () => {
    setSavingGrades(true);
    for (const g of grades) {
      await supabase
        .from("grades")
        .update({ grade_letter: g.grade_letter, percentage: g.percentage })
        .eq("id", g.id);
    }
    setSavingGrades(false);
  };

  // Login screen
  if (!authed) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="bg-card border border-border rounded-lg p-8 w-full max-w-sm">
          <h1 className="font-display text-xl font-bold text-foreground mb-2">Admin Access</h1>
          <p className="text-sm text-muted-foreground mb-6">Enter the access code to continue.</p>
          <input
            type="password"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            placeholder="Access code"
            className="w-full bg-secondary border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground mb-3 outline-none focus:ring-1 focus:ring-primary"
          />
          {error && <p className="text-destructive text-xs mb-3">{error}</p>}
          <button
            onClick={handleLogin}
            className="w-full bg-primary text-primary-foreground rounded-md py-2 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Enter
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="font-display text-lg font-semibold text-foreground">Admin Panel</h1>
          <button onClick={handleLogout} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <LogOut size={16} /> Logout
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl space-y-12">
        {/* Create Post */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Plus size={18} /> Create Post
          </h2>
          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Post title"
              className="w-full bg-secondary border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary"
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content (optional)"
              rows={3}
              className="w-full bg-secondary border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary resize-none"
            />
            <div className="flex flex-wrap gap-4">
              <select
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className="bg-secondary border border-border rounded-md px-3 py-2 text-sm text-foreground outline-none focus:ring-1 focus:ring-primary"
              >
                <option>Academics</option>
                <option>Athletics</option>
                <option>Random</option>
              </select>
              <label className="text-sm text-muted-foreground flex items-center gap-2 cursor-pointer">
                Image:
                <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} className="text-xs" />
              </label>
              <label className="text-sm text-muted-foreground flex items-center gap-2 cursor-pointer">
                Video:
                <input type="file" accept="video/*" onChange={(e) => setVideoFile(e.target.files?.[0] || null)} className="text-xs" />
              </label>
            </div>
            <button
              onClick={createPost}
              disabled={posting || !title.trim()}
              className="bg-primary text-primary-foreground rounded-md px-5 py-2 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {posting ? "Posting..." : "Create Post"}
            </button>
          </div>
        </section>

        {/* Manage Posts */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground mb-4">Manage Posts</h2>
          {posts.length === 0 ? (
            <p className="text-muted-foreground text-sm">No posts yet.</p>
          ) : (
            <div className="space-y-3">
              {posts.map((post) => (
                <div key={post.id} className="bg-card border border-border rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-foreground">{post.title}</h3>
                    <span className="text-xs text-muted-foreground">{post.tag}</span>
                  </div>
                  <button onClick={() => deletePost(post.id)} className="text-destructive hover:text-destructive/80 transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Grades */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl font-bold text-foreground">Update Grades</h2>
            <button
              onClick={saveGrades}
              disabled={savingGrades}
              className="flex items-center gap-2 bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <Save size={14} /> {savingGrades ? "Saving..." : "Save All"}
            </button>
          </div>
          <div className="space-y-3">
            {grades.map((g) => (
              <div key={g.id} className="bg-card border border-border rounded-lg p-4 grid grid-cols-3 gap-3 items-center">
                <span className="text-sm font-medium text-foreground">{g.subject}</span>
                <input
                  value={g.grade_letter}
                  onChange={(e) => updateGradeField(g.id, "grade_letter", e.target.value)}
                  className="bg-secondary border border-border rounded-md px-2 py-1.5 text-sm text-foreground outline-none focus:ring-1 focus:ring-primary"
                />
                <input
                  type="number"
                  step="0.01"
                  value={g.percentage}
                  onChange={(e) => updateGradeField(g.id, "percentage", e.target.value)}
                  className="bg-secondary border border-border rounded-md px-2 py-1.5 text-sm text-foreground outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admin;
