"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({ theme: "light", toggleTheme: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");

  const apply = (t: string) => {
    setTheme(t);
    document.documentElement.classList.toggle("dark", t === "dark");
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    
    apply(saved || (query.matches ? "dark" : "light"));

    query.onchange = (e) => {
      if (!localStorage.getItem("theme")) apply(e.matches ? "dark" : "light");
    };
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", next);
    apply(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);