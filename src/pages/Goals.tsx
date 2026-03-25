import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, GraduationCap, CheckCircle2, Star, Users, Wrench, Heart, Monitor, Briefcase, Cloud } from "lucide-react";

const Goals = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <Target size={28} className="text-primary mx-auto mb-4" />
            <h1 className="font-display text-3xl font-bold text-foreground mb-2">Goals</h1>
            <p className="text-lg text-muted-foreground mb-1">What I'm Working Toward</p>
            <p className="text-sm text-muted-foreground">Clear goals. Hard work. Results.</p>
          </div>

          {/* Academic Goals */}
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap size={20} className="text-primary" />
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
          </div>

          {/* Strengths */}
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6">
              <Star size={20} className="text-primary" />
              <h2 className="font-display text-xl font-bold text-foreground">My Strengths</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: Users, title: "Group Work", desc: "I contribute to teams and help find solutions." },
                { icon: Wrench, title: "Hands-on Learning", desc: "I learn best by doing projects and experiments." },
                { icon: Heart, title: "Connecting", desc: "Good at meeting people and building relationships." },
              ].map((item) => (
                <div key={item.title} className="bg-card border border-border rounded-lg p-5 card-glow">
                  <item.icon size={16} className="text-primary mb-2" />
                  <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Target size={20} className="text-primary" />
              <h2 className="font-display text-xl font-bold text-foreground">Interests</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6">Future Paths — Areas I'm exploring for college and career.</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {/* Technology */}
              <div className="bg-card border border-border rounded-lg p-5 card-glow">
                <Monitor size={16} className="text-primary mb-3" />
                <h3 className="font-display font-semibold text-foreground mb-2">Technology</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Digital Media</li>
                  <li>Computer Science</li>
                  <li>Cybersecurity</li>
                </ul>
              </div>

              {/* Business */}
              <div className="bg-card border border-border rounded-lg p-5 card-glow">
                <Briefcase size={16} className="text-primary mb-3" />
                <h3 className="font-display font-semibold text-foreground mb-2">Business</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Marketing</li>
                  <li>Accounting</li>
                  <li>Finance</li>
                </ul>
              </div>

              {/* Meteorology */}
              <div className="bg-card border border-border rounded-lg p-5 card-glow">
                <Cloud size={16} className="text-primary mb-3" />
                <h3 className="font-display font-semibold text-foreground mb-2">Meteorology</h3>
                <p className="text-sm text-muted-foreground">
                  Main interest. Fascinated by weather, storms, and forecasting. Something I could study in college and make a career out of.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Goals;
