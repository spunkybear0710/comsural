
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-white font-bold text-xl">
            ISL
          </div>
          <span className="font-medium text-lg">Sign Bridge</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {["Home", "Technology", "Research", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors">
            Documentation
          </button>
          <button className="px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors">
            Try Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
