import { useEffect, useState } from "react";
import IconMoon from "./icons/IconMoon.jsx";
import IconSun from "./icons/IconSun.jsx";

const initialStateDarkMode = localStorage.getItem("theme") === "dark";

const Header = () => {
  const [darkMode, setDarkMode] = useState(initialStateDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="container mx-auto px-4 pt-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold tracking-[0.3em] text-white uppercase">
          Todo
        </h1>
        <button
          className="transition-all duration-900"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <IconSun /> : <IconMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
