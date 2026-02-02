"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  debouncedQuery: string;
  setDebouncedQuery: (query: string) => void;
}

export default function Header({
  searchQuery,
  setSearchQuery,
  debouncedQuery,
  setDebouncedQuery,
}: HeaderProps) {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSearchActive, setMobileSearchActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/", icon: HiOutlineHome },
    { name: "Favorites", href: "/", icon: HiOutlineStar },
    { name: "Settings", href: "/", icon: HiOutlineCog },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 border-b 
        ${
          scrolled
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
                value={searchQuery} // Bind to searchQuery prop
                onChange={(e) => setSearchQuery(e.target.value)} // Update on change
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

              <div className="absolute inset-y-0 right-3 hidden lg:flex items-center pointer-events-none">
                <kbd className="px-1.5 py-0.5 border border-slate-300 dark:border-slate-600 rounded text-[10px] text-slate-400 font-mono font-medium">
                  /
                </kbd>
              </div>
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
                onClick={() => setIsDark(!isDark)}
                className="hidden sm:flex p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all"
              >
                {isDark ? (
                  <HiOutlineSun className="w-6 h-6" />
                ) : (
                  <HiOutlineMoon className="w-6 h-6" />
                )}
              </button>

              <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800 mx-1 hidden sm:block"></div>

              <button className="flex items-center gap-2 sm:gap-3 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                <div className="hidden lg:flex flex-col items-end">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    Alex Rivera
                  </span>
                  <span className="text-[10px] font-medium text-indigo-500">
                    Admin
                  </span>
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

      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 
          ${isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        <div
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div
          className={`absolute left-0 top-0 bottom-0 w-[280px] bg-white dark:bg-[#0F172A] shadow-2xl transition-transform duration-300 ease-out p-6
            ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <div className="h-3 w-3 border-2 border-white rounded-sm rotate-45" />
              </div>
              <span className="font-bold text-xl dark:text-white uppercase tracking-tighter">
                PRIMEFEED
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500"
            >
              <HiX className="w-5 h-5" />
            </button>
          </div>

          <nav className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all font-semibold"
              >
                <link.icon className="w-5 h-5" />
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="absolute bottom-6 left-6 right-6">
            <button
              onClick={() => setIsDark(!isDark)}
              className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 transition-all mb-4"
            >
              <span className="text-sm font-bold">Dark Mode</span>
              {isDark ? (
                <HiOutlineSun className="w-5 h-5" />
              ) : (
                <HiOutlineMoon className="w-5 h-5" />
              )}
            </button>
            <div className="flex items-center gap-3 p-2">
              <img
                src="https://ui-avatars.com/api/?name=Alex+Rivera&background=6366f1&color=fff"
                className="w-10 h-10 rounded-xl"
                alt="User"
              />
              <div>
                <p className="text-sm font-bold dark:text-white leading-none">
                  Alex Rivera
                </p>
                <p className="text-xs text-slate-500 mt-1">alex@nexus.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
