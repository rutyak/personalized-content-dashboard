"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Autoplay } from "swiper/modules";
import ContentCard from "@/components/cards/ContentCard";
import { HiOutlineTrendingUp, HiOutlineFire } from "react-icons/hi";
import "swiper/css";
import "swiper/css/pagination";

export default function TrendingFeed() {
  const trendingItems = [
    {
      title: "Global Markets Surge",
      description:
        "Indices hit record highs as inflation data cools faster than anticipated.",
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
      title: "Global Markets Surge",
      description:
        "Indices hit record highs as inflation data cools faster than anticipated.",
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
  ];

  return (
    <section className="p-4 sm:p-6 xl:p-7 bg-slate-100 dark:bg-slate-900/50 rounded-3xl shadow-sm animate-in fade-in slide-in-from-right-8 duration-1000">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-50 dark:bg-amber-500/10 rounded-xl shadow-inner">
            <HiOutlineTrendingUp className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              Trending Now
            </h2>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
              Live Updates
            </p>
          </div>
        </div>
      </div>

      <div
        className={
          trendingItems.length > 1 ? "h-[980px] w-full" : "h-[480px] w-full"
        }
      >
        <Swiper
          direction="vertical"
          slidesPerView={trendingItems.length > 1 ? 2 : 1}
          spaceBetween={16}
          mousewheel={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          modules={[Mousewheel, Pagination, Autoplay]}
          className="h-full trending-swiper"
        >
          {trendingItems.map((item, index) => (
            <SwiperSlide key={index} className="pb-2">
              <div className="transition-transform duration-500 hover:scale-[0.98]">
                <ContentCard
                  title={item.title}
                  description={item.description}
                  category={item.category}
                  time={item.time}
                  action={item.action}
                  tending={true}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button className="w-full mt-6 py-4 text-[11px] font-black text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all border-t border-slate-100 dark:border-slate-800 uppercase tracking-[0.2em] hover:tracking-[0.3em]">
        View Leaderboard
      </button>
    </section>
  );
}
