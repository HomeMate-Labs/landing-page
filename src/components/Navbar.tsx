
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-homemate-dark/70 backdrop-blur-lg border-b border-white/20 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/hmnt-token-nobg.png"
              alt="HomeMate Logo"
              className="w-8 h-8"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-homemate-accent to-purple-400 bg-clip-text text-transparent">
              HomeMate
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#benefits" className="text-foreground hover:text-homemate-accent transition-colors">
              Benefits
            </a>
            <a href="#token" className="text-foreground hover:text-homemate-accent transition-colors">
              Token
            </a>
            <a href="#join" className="text-foreground hover:text-homemate-accent transition-colors">
              Join
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center space-x-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 dark:bg-homemate-dark/90 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#benefits"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-homemate-accent/10 hover:text-homemate-accent"
              onClick={() => setIsOpen(false)}
            >
              Benefits
            </a>
            <a
              href="#token"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-homemate-accent/10 hover:text-homemate-accent"
              onClick={() => setIsOpen(false)}
            >
              Token
            </a>
            <a
              href="#join"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-homemate-accent/10 hover:text-homemate-accent"
              onClick={() => setIsOpen(false)}
            >
              Join
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
