import ContentCard from "../cards/ContentCard";
import { HiOutlineSparkles, HiOutlineFilter } from "react-icons/hi";

export default function PersonalizedFeed() {
  return (
    <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between mb-8 px-2">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-50 dark:bg-indigo-500/10 rounded-lg">
            <HiOutlineSparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              Personalized Feed
            </h2>
            <p className="text-xs text-slate-500 font-medium">Curated based on your interests</p>
          </div>
        </div>
        
        <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors border border-slate-200 dark:border-slate-700">
          <HiOutlineFilter className="w-4 h-4" />
          Filter
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <ContentCard
          title="Latest Tech News"
          description="Next-generation AI models are fundamentally shifting the landscape of modern frontend development workflows."
          category="Technology"
          time="2 min read"
          image="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400"
          action="Read Article"
          variant="primary"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContentCard
            title="Sci-Fi Essentials"
            description="Explore the top-rated cinematic masterpieces that defined the genre this year."
            category="Movies"
            time="5 min read"
            image="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=400"
            action="Watch Now"
          />
          <ContentCard
            title="React Ecosystem"
            description="#ReactJS continues to dominate global trends with the latest Server Components update."
            category="Social"
            time="Trending"
            image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=400"
            action="View Discussion"
          />
        </div>
      </div>
    </section>
  );
}