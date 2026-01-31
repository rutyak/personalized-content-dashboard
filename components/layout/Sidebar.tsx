import Link from "next/link";
import {
  HiOutlineViewGrid,
  HiOutlineStar,
  HiOutlineCog,
  HiOutlineLogout,
  HiChevronRight,
} from "react-icons/hi";

const navItems = [
  { name: "Home", href: "/dashboard", icon: HiOutlineViewGrid },
  { name: "Favorites", href: "/favorites", icon: HiOutlineStar },
  { name: "Settings", href: "/settings", icon: HiOutlineCog },
];

export default function Sidebar() {
  return (
    <aside className="fixed min-h-screen overflow-hidden w-72 hidden xl:flex flex-col bg-white dark:bg-[#0F172A] border-r border-slate-200 dark:border-slate-800 transition-all duration-300">
      <div className="h-20 flex items-center px-8">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200 dark:shadow-none">
            <div className="h-4 w-4 border-2 border-white rounded-sm rotate-45" />
          </div>
          <span className="font-black text-xl tracking-tighter text-slate-900 dark:text-white uppercase italic">
            PrimeFeed
          </span>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1.5">
        <p className="px-4 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 mb-4">
          Main Menu
        </p>
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="group flex items-center justify-between px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-indigo-50 dark:hover:bg-slate-800/50 hover:text-indigo-600 dark:hover:text-white transition-all duration-200"
          >
            <div className="flex items-center gap-3.5">
              <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-semibold text-[15px]">{item.name}</span>
            </div>
            <HiChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </Link>
        ))}
      </nav>

      <div className="p-4 mt-auto">
        <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/50 rounded-2xl flex items-center gap-3 shadow-sm">
          <div className="relative">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 ring-2 ring-white dark:ring-slate-700" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-[#0F172A] rounded-full" />
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-bold text-slate-900 dark:text-white truncate">
              Alex Rivera
            </p>
            <p className="text-[11px] font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              Pro Member
            </p>
          </div>
          <button className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-lg transition-all">
            <HiOutlineLogout className="w-5 h-5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
