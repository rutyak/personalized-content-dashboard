"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Autoplay } from "swiper/modules";
import ContentCard from "../cards/ContentCard";
import { HiOutlineBookmark } from "react-icons/hi";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import "swiper/css";

export default function FavoritesFeed() {
  const favoriteItems = useSelector(
    (state: RootState) => state.favorites.items,
  );

  return (
    <section className="p-4 sm:p-6 xl:p-7 bg-slate-100 dark:bg-slate-900/50 rounded-3xl shadow-sm animate-in fade-in slide-in-from-right-8 duration-1000">
      <div className="flex flex-col sm:flex-row lg:flex-col sm:items-center lg:items-start justify-between gap-4 mb-8 px-1">
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
          <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-tight bg-white dark:bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-200/50 dark:border-slate-700/50 shadow-sm">
            {favoriteItems.length} Saved Items
          </span>
        </div>
      </div>

      <div
        className={
          favoriteItems.length > 1 ? "h-[980px] w-full" : "h-[480px] w-full"
        }
      >
        {favoriteItems && favoriteItems.length > 0 ? (
          <Swiper
            direction="vertical"
            slidesPerView={favoriteItems.length > 1 ? 2 : 1}
            spaceBetween={16}
            mousewheel={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            modules={[Mousewheel, Autoplay]}
            className="h-full"
          >
            {favoriteItems.map((item, index) => (
              <SwiperSlide key={item.id || index} className="pb-2">
                <div className="transition-transform duration-500 hover:scale-[0.98]">
                  <ContentCard
                    id={item.id}
                    title={item.title}
                    description={item.description || ""}
                    category={item.category}
                    image={item.image}
                    time={item.time}
                    action="Continue Reading"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              No favorites saved yet.
            </p>
          </div>
        )}
      </div>

      <button className="w-full mt-6 py-4 text-[11px] font-black text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-all border-t border-slate-100 dark:border-slate-800 uppercase tracking-[0.2em] hover:tracking-[0.3em]">
        Manage Favorites
      </button>
    </section>
  );
}
