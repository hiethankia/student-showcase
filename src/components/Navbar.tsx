import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/academics", label: "Academics" },
  { to: "/athletics", label: "Athletics" },
  { to: "/posts", label: "Posts" },
  { to: "/goals", label: "Goals" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border animate-fade-in">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold text-foreground hover:text-primary transition-colors">
          <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-md object-contain" />
          Ethan Kia
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary story-link ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
              style={{ animationDelay: `${i * 75}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-b border-border px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
