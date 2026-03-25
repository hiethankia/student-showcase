import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GradeCard from "@/components/GradeCard";
import { BookOpen, GraduationCap, CheckCircle2 } from "lucide-react";

interface Grade {
  id: string;
  subject: string;
  grade_letter: string;
  percentage: number;
}

const Academics = () => {
  const [grades, setGrades] = useState<Grade[]>([]);

  useEffect(() => {
    const fetchGrades = async () => {
      const { data } = await supabase.from("grades").select("*").order("subject");
      if (data) setGrades(data);
    };
    fetchGrades();
  }, []);

  const avgGrade = grades.length > 0
    ? (grades.reduce((sum, g) => sum + g.percentage, 0) / grades.length).toFixed(1)
    : "—";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-14">
            <GraduationCap size={28} className="text-primary mx-auto mb-4" />
            <h1 className="font-display text-3xl font-bold text-foreground mb-2">Academics</h1>
            <p className="text-muted-foreground">Current grades and academic goals.</p>
          </div>

          {/* Current Grades */}
          <section className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <BookOpen size={18} className="text-primary" />
                <h2 className="font-display text-xl font-bold text-foreground">Current Grades</h2>
              </div>
              <span className="text-sm text-muted-foreground">Average: {avgGrade}%</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {grades.map((g) => (
                <GradeCard
                  key={g.id}
                  subject={g.subject}
                  gradeLetter={g.grade_letter}
                  percentage={g.percentage}
                />
              ))}
            </div>
          </section>

          {/* Academic Goals */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle2 size={18} className="text-primary" />
              <h2 className="font-display text-xl font-bold text-foreground">Academic Goals</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: "3.8+ GPA", desc: "Keep grades high and stay on top of work." },
                { title: "No Missing Work", desc: "Stay organized. Turn everything in on time." },
                { title: "A's in Core Classes", desc: "Focus on doing well in required courses." },
              ].map((goal) => (
                <div key={goal.title} className="bg-card border border-border rounded-lg p-5 card-glow">
                  <CheckCircle2 size={16} className="text-primary mb-2" />
                  <h3 className="font-display font-semibold text-foreground mb-1">{goal.title}</h3>
                  <p className="text-sm text-muted-foreground">{goal.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Academics;
