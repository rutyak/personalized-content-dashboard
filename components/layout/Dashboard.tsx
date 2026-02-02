"use client";

import Sidebar from "./Sidebar";
import Header from "./Header";
import PersonalizedFeed from "../feeds/PersonalizedFeed";
import TrendingFeed from "../feeds/TrendingFeed";
import FavoritesFeed from "../feeds/FavoritesFeed";
import { useState } from "react";

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  return (
    <div className="flex min-h-screen bg-[#f5f8fc] dark:bg-[#0F172A] font-sans selection:bg-indigo-100 selection:text-indigo-700">
      <Sidebar />

      <div className="flex flex-1 flex-col min-w-0 xl:ml-72">
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          debouncedQuery={debouncedQuery}
          setDebouncedQuery={setDebouncedQuery}
        />

        <main className="p-4 sm:p-6 xl:p-8 flex-1 overflow-y-auto max-w-[1600px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-8 order-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 px-1">
                <h2 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                  Personalized For You
                </h2>
              </div>
              <PersonalizedFeed
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                debouncedQuery={debouncedQuery}
                setDebouncedQuery={setDebouncedQuery}
              />
            </div>

            {/* Sidebar Feed Area */}
            <div className="lg:col-span-4 space-y-8 lg:space-y-10 order-2">
              <section>
                <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 lg:mb-6 px-2">
                  Trending Topics
                </h3>
                <TrendingFeed />
              </section>

              <section>
                <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 lg:mb-6 px-2">
                  Saved Articles
                </h3>
                <FavoritesFeed />
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
