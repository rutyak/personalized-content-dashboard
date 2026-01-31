import Sidebar from "./Sidebar";
import Header from "./Header";
import PersonalizedFeed from "../feeds/PersonalizedFeed";
import TrendingFeed from "../feeds/TrendingFeed";
import FavoritesFeed from "../feeds/FavoritesFeed";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A] font-sans selection:bg-indigo-100 selection:text-indigo-700">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />

        <main className="p-8 flex-1 overflow-y-auto max-w-[1600px] mx-auto w-full">
          <header className="mb-10">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Good Morning, Alex
            </h1>
            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Here is what's happening with your personalized news feed today.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                label: "Total News",
                val: "120",
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                label: "Recommendations",
                val: "34",
                color: "text-indigo-600",
                bg: "bg-indigo-50",
              },
              {
                label: "Favorites",
                val: "18",
                color: "text-rose-600",
                bg: "bg-rose-50",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800/50 p-6 shadow-sm border border-slate-200/60 dark:border-slate-700/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative z-10">
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    {stat.label}
                  </p>
                  <p
                    className={`text-4xl font-black mt-2 ${stat.color} dark:text-white`}
                  >
                    {stat.val}
                  </p>
                </div>
                <div
                  className={`absolute -right-4 -bottom-4 h-24 w-24 rounded-full ${stat.bg} dark:opacity-5 opacity-40 group-hover:scale-150 transition-transform duration-500`}
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                  Personalized For You
                </h2>
                <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400">
                  Refine Preferences
                </button>
              </div>
              <div className="rounded-3xl bg-white dark:bg-slate-800/40 p-1 ring-1 ring-slate-200/50 dark:ring-slate-700/50 shadow-2xl shadow-slate-200/40 dark:shadow-none">
                <PersonalizedFeed />
              </div>
            </div>

            <div className="lg:col-span-4 space-y-10">
              <section>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-6 px-2">
                  Trending Topics
                </h3>
                <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/20 border border-dashed border-slate-300 dark:border-slate-700 p-4">
                  <TrendingFeed />
                </div>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-6 px-2">
                  Saved Articles
                </h3>
                <div className="rounded-2xl bg-white dark:bg-slate-800/50 shadow-sm border border-slate-200/60 dark:border-slate-700/50 overflow-hidden">
                  <FavoritesFeed />
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
