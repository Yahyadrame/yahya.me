"use client";

import { useState, useEffect } from "react";
import { Terminal, Code2, Github, Star } from "lucide-react";

type Props = {
  terminalMode: boolean;
  setTerminalMode: (v: boolean) => void;
  uiType?: "landing" | "modular";
  setUiType?: (v: "landing" | "modular") => void;
};

const Navbar = ({ terminalMode, setTerminalMode, uiType, setUiType }: Props) => {
  const [stars, setStars] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/repos/Yahyadrame/yahya.me")
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.stargazers_count === "number") {
          setStars(data.stargazers_count);
        }
      })
      .catch((err) => console.error("Failed to fetch repo stars", err));
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${terminalMode ? "py-0" : scrolled ? "py-3" : "py-4"
        }`}
    >
      <div className={`mx-auto transition-all duration-500 ${terminalMode ? "max-w-full px-0 mt-2" : "max-w-7xl px-2 sm:px-4 lg:px-6"
        }`}>
        <div
          className={`relative flex items-center justify-between px-2 sm:px-4 transition-all duration-500 ${terminalMode
            ? "bg-black text-brand-caribbean border-b border-brand-caribbean/30 rounded-none py-2"
            : `py-3 rounded-2xl border transition-all duration-500 ${scrolled
              ? "glass neon-border border-brand-caribbean/30 shadow-2xl"
              : "bg-transparent border-transparent"
            }`
            }`}
        >
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              if (terminalMode) {
                e.preventDefault();
              }
            }}
            className="flex items-center gap-2 group"
          >
            <div className={`p-2 rounded-xl border transition-all duration-300 ${terminalMode ? "border-brand-caribbean/50 bg-brand-caribbean/10" : "border-white/10 bg-white/5 group-hover:border-brand-caribbean/50"
              }`}>
              {terminalMode ? (
                <Terminal size={22} className="text-brand-caribbean" />
              ) : (
                <Code2 size={22} className="text-brand-caribbean" />
              )}
            </div>
            <div className="relative">
              <span className="font-black text-2xl tracking-tighter uppercase text-white flex items-baseline">
                YH<span className={`text-[17px] ml-0.5 transition-colors ${terminalMode ? "text-zinc-500 group-hover:text-brand-caribbean" : "text-zinc-500 group-hover:text-brand-caribbean"}`}>D</span>
              </span>
              <div className={`absolute -bottom-0.5 left-0 h-1 rounded-full transition-all duration-300 w-0 group-hover:w-full ${terminalMode ? "bg-brand-caribbean shadow-[0_0_10px_rgba(0,223,129,0.5)]" : "bg-brand-caribbean shadow-[0_0_10px_rgba(0,223,129,0.5)]"}`} />
            </div>
          </a>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Yahyadrame/yahya.me"
              target="_blank"
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all group"
            >
              <Github size={22} className="text-zinc-400 group-hover:text-white transition-colors" />
              {stars !== null && (
                <span className="flex items-center text-base font-black text-zinc-500 group-hover:text-white transition-colors">
                  <Star size={18} className="text-yellow-500 fill-yellow-500 mr-1" />
                  {stars}
                </span>
              )}
            </a>

            <button
              onClick={() => setTerminalMode(!terminalMode)}
              className={`p-2 rounded-xl border transition-all duration-300 ${terminalMode
                ? "border-brand-caribbean/50 bg-brand-caribbean/20 text-brand-caribbean"
                : "border-white/5 bg-white/5 text-zinc-400 hover:text-white hover:border-white/20"
                }`}
              title="Toggle Terminal"
            >
              <Terminal size={22} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
