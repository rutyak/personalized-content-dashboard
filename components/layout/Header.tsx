"use client";

import { useState, useEffect } from "react";
import {
  HiOutlineMenuAlt2,
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineSearch,
  HiOutlineBell,
  HiOutlineChevronDown,
  HiX,
  HiOutlineHome,
  HiOutlineStar,
  HiOutlineCog,
} from "react-icons/hi";
import { useTheme } from "../../context/Theme";
import MobileMenu from "./MobileMenu"; 

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  debouncedQuery: string;
  setDebouncedQuery: (query: string) => void;
}

const navLinks = [
  { name: "Home", href: "/", icon: HiOutlineHome },
  { name: "Favorites", href: "/", icon: HiOutlineStar },
  { name: "Settings", href: "/", icon: HiOutlineCog },
];

export default function Header({
  searchQuery,
  setSearchQuery,
}: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileSearchActive, setMobileSearchActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 border-b 
        ${scrolled
            ? "bg-white/80 dark:bg-[#0F172A]/80 backdrop-blur-md border-slate-200/60 dark:border-slate-800/60 shadow-sm"
            : "bg-white dark:bg-[#0F172A] border-transparent"
        }`}
      >
        <div className="h-16 md:h-20 max-w-[1600px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10">
          {!mobileSearchActive && (
            <div className="flex items-center gap-2 md:gap-4 transition-all animate-in fade-in duration-300">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="xl:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <HiOutlineMenuAlt2 className="w-6 h-6" />
              </button>
              <div className="hidden sm:block">
                <h2 className="hidden md:block text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-0.5">
                  Platform
                </h2>
                <p className="text-base md:text-lg font-bold text-slate-900 dark:text-white leading-none">
                  Overview
                </p>
              </div>
            </div>
          )}

          <div
            className={`flex-1 transition-all duration-300 px-4 max-w-2xl 
            ${mobileSearchActive ? "flex absolute inset-0 bg-white dark:bg-[#0F172A] z-50 items-center px-4" : "hidden md:flex justify-center"}`}
          >
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <HiOutlineSearch className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
              </div>
              <input
                type="text"
                autoFocus={mobileSearchActive}
                placeholder="Search anything..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-100 dark:bg-slate-800/50 border-none rounded-xl md:rounded-2xl py-2.5 pl-11 pr-12 
                  text-sm text-slate-900 dark:text-slate-100 placeholder-slate-500
                  focus:ring-2 focus:ring-indigo-500/20 focus:bg-white dark:focus:bg-slate-800 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-10 md:right-12 flex items-center px-2 text-slate-400 hover:text-rose-500 transition-colors"
                >
                  <HiX className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {!mobileSearchActive && (
            <div className="flex items-center gap-1 sm:gap-3">
              <button
                onClick={() => setMobileSearchActive(true)}
                className="md:hidden p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl"
              >
                <HiOutlineSearch className="w-6 h-6" />
              </button>

              <button className="relative p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl">
                <HiOutlineBell className="w-6 h-6" />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 border-2 border-white dark:border-[#0F172A] rounded-full"></span>
              </button>

              <button
                onClick={toggleTheme}
                className="hidden sm:flex p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all"
              >
                {theme === "dark" ? <HiOutlineSun className="w-6 h-6" /> : <HiOutlineMoon className="w-6 h-6" />}
              </button>

              <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800 mx-1 hidden sm:block"></div>

              <button className="flex items-center gap-2 sm:gap-3 px-3 py-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                <div className="hidden lg:flex flex-col items-end">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">Alex Rivera</span>
                  <span className="text-[10px] font-medium text-indigo-500">Admin</span>
                </div>
                <img
                  src="https://ui-avatars.com/api/?name=Alex+Rivera&background=6366f1&color=fff"
                  alt="Avatar"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl object-cover ring-2 ring-indigo-500/10"
                />
                <HiOutlineChevronDown className="hidden md:block text-slate-400 w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}