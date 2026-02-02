"use client";

import Link from "next/link";
import { HiX, HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { useTheme } from "../../context/Theme";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string; icon: any }[];
}

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 
        ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
    >
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className={`absolute left-0 top-0 bottom-0 w-[280px] bg-white dark:bg-[#0F172A] shadow-2xl transition-transform duration-300 ease-out p-6
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
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
            onClick={onClose}
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
              onClick={onClose}
              className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all font-semibold"
            >
              <link.icon className="w-5 h-5" />
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <button
            onClick={toggleTheme}
            className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 transition-all mb-4"
          >
            <span className="text-sm font-bold">Dark Mode</span>
            {theme === "dark" ? (
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
  );
}