import ContentCard from "../cards/ContentCard";
import { HiOutlineBookmark, HiOutlineExternalLink } from "react-icons/hi";

export default function FavoritesFeed() {
  return (
    <section className="animate-in fade-in slide-in-from-right-4 duration-700">
      <div className="flex items-center justify-between mb-5 px-1">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-rose-50 dark:bg-rose-500/10 rounded-lg">
            <HiOutlineBookmark className="w-4 h-4 text-rose-600 dark:text-rose-400" />
          </div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
            Favorites
          </h2>
        </div>
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
          12 Saved
        </span>
      </div>

      <div className="space-y-4">
        <div className="group relative">
          <ContentCard
            title="Understanding Redux Toolkit"
            description="A deep dive into state management patterns using the modern Redux Toolkit approach."
            category="Development"
            time="8 min read"
            action="Continue Reading"
          />
          <div className="absolute left-0 top-4 bottom-4 w-1 bg-rose-500 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <button className="w-full py-4 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col items-center justify-center gap-1 group hover:border-indigo-500/50 hover:bg-indigo-50/30 dark:hover:bg-indigo-500/5 transition-all">
          <HiOutlineExternalLink className="w-5 h-5 text-slate-400 group-hover:text-indigo-500 transition-colors" />
          <span className="text-xs font-semibold text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300">
            View all bookmarks
          </span>
        </button>
      </div>
    </section>
  );
}