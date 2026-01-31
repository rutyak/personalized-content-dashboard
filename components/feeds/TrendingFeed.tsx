import ContentCard from "@/components/cards/ContentCard";
import { HiOutlineTrendingUp, HiOutlineFire } from "react-icons/hi";

export default function TrendingFeed() {
  const trendingItems = [
    {
      title: "Global Markets Surge",
      description:
        "Major indices hit record highs as inflation data cools faster than anticipated.",
      category: "Finance",
      time: "Trending",
      action: "Read Analysis",
    },
    {
      title: "The Multiverse Saga",
      description:
        "Critics call the latest Marvel release a 'visual masterpiece' and a return to form.",
      category: "Entertainment",
      time: "New Release",
      action: "Watch Trailer",
    },
    {
      title: "SpaceX Starship Launch",
      description:
        "Successful orbital flight test marks a new milestone in deep space exploration.",
      category: "Technology",
      time: "2h ago",
      action: "View Details",
    },
  ];

  return (
    <section className="animate-in fade-in slide-in-from-right-8 duration-1000 p-4 sm:p-6 xl:p-8">
      <div className="flex flex-col sm:flex-row lg:flex-col sm:items-center lg:items-start justify-between gap-4 mb-8 px-1">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-50 dark:bg-amber-500/10 rounded-xl">
            <HiOutlineTrendingUp className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              Trending Now
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              What the world is watching
            </p>
          </div>
        </div>

        <div className="flex lg:items-start">
          <div className="inline-flex self-start sm:self-center items-center gap-1.5 text-[10px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-widest bg-amber-50 dark:bg-amber-500/10 px-3 py-1.5 rounded-full ring-1 ring-amber-500/20">
            <HiOutlineFire className="w-3.5 h-3.5 animate-pulse" />
            Live updates
          </div>
        </div>
      </div>

      <div className="space-y-6 sm:space-y-8 lg:space-y-10">
        {trendingItems.map((item, index) => (
          <div key={index} className="relative group">
            <ContentCard
              title={item.title}
              description={item.description}
              category={item.category}
              time={item.time}
              action={item.action}
            />
          </div>
        ))}

        <button className="w-full mt-4 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all border-t border-slate-100 dark:border-slate-800 uppercase tracking-[0.2em] hover:tracking-[0.3em] active:scale-95">
          View Trending Leaderboard
        </button>
      </div>
    </section>
  );
}
