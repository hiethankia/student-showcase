import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-md">
          <h1 className="font-display text-6xl font-bold text-foreground mb-4">404</h1>
          <h2 className="font-display text-xl font-semibold text-foreground mb-2">Page Not Found</h2>
          <p className="text-muted-foreground text-sm mb-8">
            This page does not exist or may have been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
