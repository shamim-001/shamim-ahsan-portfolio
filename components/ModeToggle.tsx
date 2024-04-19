"use client";
import { useThemeContext } from "@/context/ThemeProvider";
import { Moon, Sun } from "lucide-react";

const ModeToggle = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();
  return (
    <div className="swap swap-rotate">
      <input type="checkbox" />
      <Sun
        className={`${isDarkMode ? "swap-off" : "swap-on"}`}
        onClick={toggleTheme}
      />
      <Moon
        className={`${isDarkMode ? "swap-on" : "swap-off"}`}
        onClick={toggleTheme}
      />
    </div>
  );
};

export default ModeToggle;
