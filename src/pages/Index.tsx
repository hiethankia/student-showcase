import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroGlow from "@/components/HeroGlow";
import { ArrowRight, Dumbbell, Trophy, BookOpen, Target, Award, TrendingUp, Users, Mail } from "lucide-react";

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
            Ethan Kia — student-athlete. Academics, wrestling, and weightlifting.
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
              to="/contact"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
            >
              Contact Me
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
              { icon: BookOpen, title: "Academics", desc: "Dedicated to maintaining high grades and developing strong study habits." },
              { icon: Trophy, title: "Wrestling", desc: "Committed athlete building discipline, strength, and competitive drive." },
              { icon: Dumbbell, title: "Weightlifting", desc: "Consistent training to push limits and build physical resilience." },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-lg p-5 card-glow hover-scale cursor-default group">
                <item.icon size={20} className="text-primary mb-3 transition-transform duration-200 group-hover:scale-110" />
                <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why I'd Excel in College */}
      <section className="py-14 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold text-foreground mb-2 text-center">
            Why I'd Excel in College
          </h2>
          <p className="text-muted-foreground text-center mb-8">Qualities that set me apart.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Award, title: "Discipline", desc: "Balancing athletics and academics daily." },
              { icon: TrendingUp, title: "Growth Mindset", desc: "Always looking to improve and learn." },
              { icon: Users, title: "Team Player", desc: "Thrive in collaborative environments." },
              { icon: Target, title: "Goal-Driven", desc: "I set targets and work until I hit them." },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-lg p-5 card-glow text-center">
                <item.icon size={20} className="text-primary mx-auto mb-3" />
                <h3 className="font-display text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
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

      {/* Contact CTA */}
      <section className="py-14 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card border border-border rounded-lg p-8 text-center card-glow">
            <Mail size={24} className="text-primary mx-auto mb-4" />
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">Let's Connect</h2>
            <p className="text-muted-foreground mb-6">Coaches, recruiters, and mentors — I'd love to hear from you.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Contact Me <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
