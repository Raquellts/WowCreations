"use client";
import React, { useState } from "react";

export type Theme = "dark" | "winter";

export interface ThemeSwitchProps {
  initialTheme?: Theme;
  theme: Theme;
}
export const ThemeSwitch: React.FC<ThemeSwitchProps> = ({
  initialTheme = "dark",
  theme: currentTheme,
}) => {
  const [theme, setTheme] = useState(initialTheme);

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "winter" : "dark"));
  };

  return (
    <div>
      <button onClick={handleThemeChange}>Toggle Theme</button>
      <p>Current Theme: {currentTheme}</p>
    </div>
  );
};
