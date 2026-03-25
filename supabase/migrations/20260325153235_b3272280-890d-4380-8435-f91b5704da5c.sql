
-- Create posts table
CREATE TABLE public.posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT,
  tag TEXT NOT NULL CHECK (tag IN ('Academics', 'Athletics', 'Random')),
  image_url TEXT,
  video_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create grades table
CREATE TABLE public.grades (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  subject TEXT NOT NULL,
  grade_letter TEXT NOT NULL,
  percentage NUMERIC(5,2) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.grades ENABLE ROW LEVEL SECURITY;

-- Public read for posts and grades
CREATE POLICY "Anyone can read posts" ON public.posts FOR SELECT USING (true);
CREATE POLICY "Anyone can read grades" ON public.grades FOR SELECT USING (true);

-- Allow all operations (admin auth is code-level)
CREATE POLICY "Allow insert posts" ON public.posts FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow update posts" ON public.posts FOR UPDATE USING (true);
CREATE POLICY "Allow delete posts" ON public.posts FOR DELETE USING (true);

CREATE POLICY "Allow insert grades" ON public.grades FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow update grades" ON public.grades FOR UPDATE USING (true);
CREATE POLICY "Allow delete grades" ON public.grades FOR DELETE USING (true);

-- Create storage bucket for media uploads
INSERT INTO storage.buckets (id, name, public) VALUES ('media', 'media', true);

CREATE POLICY "Anyone can view media" ON storage.objects FOR SELECT USING (bucket_id = 'media');
CREATE POLICY "Anyone can upload media" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'media');
CREATE POLICY "Anyone can delete media" ON storage.objects FOR DELETE USING (bucket_id = 'media');

-- Seed grades
INSERT INTO public.grades (subject, grade_letter, percentage) VALUES
  ('Algebra 1', 'D-', 62.96),
  ('Intro to Business', 'B', 85.45),
  ('Pre AP English 1', 'C+', 77.86),
  ('Biology', 'B', 83.93),
  ('Spanish 1', 'B', 83.34),
  ('World History', 'B-', 80.92);
