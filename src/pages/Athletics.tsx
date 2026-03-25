import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Trophy, Dumbbell, Flame, Target } from "lucide-react";

const Athletics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-14">
            <Trophy size={28} className="text-primary mx-auto mb-4" />
            <h1 className="font-display text-3xl font-bold text-foreground mb-2">Athletics</h1>
            <p className="text-muted-foreground">Training, competing, and getting better every day.</p>
          </div>

          {/* Sports */}
          <section className="mb-14">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-6 card-glow">
                <Trophy size={22} className="text-primary mb-3" />
                <h3 className="font-display text-lg font-bold text-foreground mb-2">Wrestling</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Competing on the school wrestling team. Learning discipline, mental toughness, and how to push through when it gets hard.
                </p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><Flame size={14} className="text-primary" />Varsity competitor</li>
                  <li className="flex items-center gap-2"><Flame size={14} className="text-primary" />Building technique and strength</li>
                  <li className="flex items-center gap-2"><Flame size={14} className="text-primary" />Year-round commitment</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 card-glow">
                <Dumbbell size={22} className="text-primary mb-3" />
                <h3 className="font-display text-lg font-bold text-foreground mb-2">Weightlifting</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Training consistently to build strength and support wrestling performance. It carries over into everything I do.
                </p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><Flame size={14} className="text-primary" />Consistent training schedule</li>
                  <li className="flex items-center gap-2"><Flame size={14} className="text-primary" />Progressive overload approach</li>
                  <li className="flex items-center gap-2"><Flame size={14} className="text-primary" />Strength and conditioning focus</li>
                </ul>
              </div>
            </div>
          </section>

          {/* What Athletics Teaches Me */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <Target size={18} className="text-primary" />
              <h2 className="font-display text-xl font-bold text-foreground">What Athletics Teaches Me</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: "Discipline", desc: "Showing up and putting in work even when it's not easy." },
                { title: "Resilience", desc: "Learning from losses and coming back stronger." },
                { title: "Time Management", desc: "Balancing training with schoolwork and staying on track." },
              ].map((item) => (
                <div key={item.title} className="bg-card border border-border rounded-lg p-5 card-glow">
                  <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
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

export default Athletics;
