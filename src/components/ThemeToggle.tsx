
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Set dark mode as default
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");

    // Check if user has a different preference saved
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return null
  // (
  //   <Button
  //     variant="outline"
  //     size="icon"
  //     onClick={toggleTheme}
  //     className="rounded-full w-10 h-10 bg-white/10 dark:bg-homemate-dark/30 backdrop-blur-md border-white/20 dark:border-white/10"
  //   >
  //     {isDarkMode ? (
  //       <Sun className="h-5 w-5 text-yellow-400" />
  //     ) : (
  //       <Moon className="h-5 w-5" />
  //     )}
  //   </Button>
  // );
};

export default ThemeToggle;
