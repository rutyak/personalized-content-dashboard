import ContentCard from "@/components/cards/ContentCard";
import { HiOutlineTrendingUp, HiOutlineFire } from "react-icons/hi";

export default function TrendingFeed() {
  return (
    <section className="animate-in fade-in slide-in-from-right-8 duration-1000">
      <div className="flex items-center justify-between mb-6 px-1">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-amber-50 dark:bg-amber-500/10 rounded-lg">
            <HiOutlineTrendingUp className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          </div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
            Trending Now
          </h2>
        </div>
        <div className="flex items-center gap-1 text-[10px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-widest bg-amber-50 dark:bg-amber-500/10 px-2 py-1 rounded-full">
          <HiOutlineFire className="w-3 h-3" />
          Live
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative group">
          <span className="absolute -left-3 top-6 text-4xl font-black text-slate-100 dark:text-slate-800/50 italic group-hover:text-indigo-500/10 transition-colors duration-500 pointer-events-none">
            01
          </span>
          <ContentCard
            title="Global Markets Surge"
            description="Major indices hit record highs as inflation data cools faster than anticipated."
            category="Finance"
            time="Trending"
            action="Read Analysis"
          />
        </div>

        <div className="relative group">
          <span className="absolute -left-3 top-6 text-4xl font-black text-slate-100 dark:text-slate-800/50 italic group-hover:text-indigo-500/10 transition-colors duration-500 pointer-events-none">
            02
          </span>
          <ContentCard
            title="The Multiverse Saga"
            description="Critics call the latest Marvel release a 'visual masterpiece' and a return to form."
            category="Entertainment"
            time="New Release"
            action="Watch Trailer"
          />
        </div>

        <button className="w-full mt-2 py-3 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors border-t border-slate-100 dark:border-slate-800 uppercase tracking-widest">
          View Trending Leaderboard
        </button>
      </div>
    </section>
  );
}
