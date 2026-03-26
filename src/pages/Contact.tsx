import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <Mail size={28} className="text-primary mx-auto mb-4" />
            <h1 className="font-display text-3xl font-bold text-foreground mb-2">Get in Touch</h1>
            <p className="text-muted-foreground">I'd love to connect — feel free to reach out anytime.</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {/* Call */}
            <a
              href="tel:+16163870268"
              className="bg-card border border-border rounded-lg p-6 card-glow text-center group hover:border-primary/30 transition-all"
            >
              <Phone size={22} className="text-primary mx-auto mb-3 transition-transform group-hover:scale-110" />
              <h2 className="font-display font-semibold text-foreground mb-1">Call</h2>
              <p className="text-sm text-muted-foreground">(616) 387-0268</p>
            </a>

            {/* Text */}
            <a
              href="sms:+16163870268"
              className="bg-card border border-border rounded-lg p-6 card-glow text-center group hover:border-primary/30 transition-all"
            >
              <MessageSquare size={22} className="text-primary mx-auto mb-3 transition-transform group-hover:scale-110" />
              <h2 className="font-display font-semibold text-foreground mb-1">Text</h2>
              <p className="text-sm text-muted-foreground">(616) 387-0268</p>
            </a>

            {/* Email */}
            <a
              href="mailto:hiethankia1619@gmail.com"
              className="bg-card border border-border rounded-lg p-6 card-glow text-center group hover:border-primary/30 transition-all"
            >
              <Mail size={22} className="text-primary mx-auto mb-3 transition-transform group-hover:scale-110" />
              <h2 className="font-display font-semibold text-foreground mb-1">Email</h2>
              <p className="text-sm text-muted-foreground break-all">hiethankia1619@gmail.com</p>
              <p className="text-xs text-muted-foreground/70 mt-1">Delayed responses</p>
            </a>
          </div>

          {/* Professional note */}
          <div className="mt-12 bg-card border border-border rounded-lg p-6 text-center card-glow">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Whether you're a coach, recruiter, or mentor — I'm always open to conversations about academics, athletics, and future opportunities. Don't hesitate to reach out.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
