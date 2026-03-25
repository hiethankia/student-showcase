import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroGlow from "@/components/HeroGlow";
import { ArrowRight, Dumbbell, Trophy, BookOpen, Target } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroGlow />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full text-xs font-medium mb-6">
            <BookOpen size={14} />
            Freshman • Class of 2029
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
            Building my future,{" "}
            <span className="text-gradient">one step at a time.</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Student-athlete focused on academics, wrestling, and weightlifting. Working hard now to open doors later.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/academics"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Academics <ArrowRight size={16} />
            </Link>
            <Link
              to="/athletics"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
            >
              Athletics
            </Link>
            <Link
              to="/posts"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
            >
              Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-14 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
            What I'm About
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: BookOpen, title: "Academics", desc: "Staying on top of coursework and pushing for better grades every semester." },
              { icon: Trophy, title: "Wrestling", desc: "Competing on the school team. Building discipline, toughness, and work ethic on the mat." },
              { icon: Dumbbell, title: "Weightlifting", desc: "Training consistently to get stronger. It carries over into everything I do." },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-lg p-5 card-glow">
                <item.icon size={20} className="text-primary mb-3" />
                <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals preview */}
      <section className="py-14 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Target size={24} className="text-primary mx-auto mb-4" />
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">Goals & Strengths</h2>
          <p className="text-muted-foreground mb-6">Clear goals. Hard work. Results.</p>
          <Link
            to="/goals"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
          >
            See My Goals <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
