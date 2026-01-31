import ContentCard from "../cards/ContentCard";
import { HiOutlineBookmark, HiOutlineExternalLink } from "react-icons/hi";

export default function FavoritesFeed() {
  return (
    <section className="animate-in fade-in slide-in-from-right-4 duration-700 p-4 sm:p-6 xl:p-8">
      <div className="flex flex-col sm:flex-row lg:flex-col sm:items-center lg:items-start justify-between gap-4 mb-6 px-1">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center h-10 w-10 bg-rose-50 dark:bg-rose-500/10 rounded-xl shrink-0">
            <HiOutlineBookmark className="w-5 h-5 text-rose-600 dark:text-rose-400" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-none">
              Favorites
            </h2>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider mt-1">
              Personal Collection
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-tight bg-slate-100 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-200/50 dark:border-slate-700/50 shadow-sm">
            12 Saved Items
          </span>
        </div>
      </div>

      <div className="space-y-5">
        <div className="group relative">
          <ContentCard
            title="Understanding Redux Toolkit"
            description="A deep dive into state management patterns using the modern Redux Toolkit approach."
            category="Development"
            time="8 min read"
            action="Continue Reading"
          />
          <div className="absolute left-0 top-6 bottom-6 w-1 bg-rose-500 rounded-r-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </div>
      </div>
    </section>
  );
}
