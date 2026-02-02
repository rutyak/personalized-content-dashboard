"use client";

import { toggleFavorite } from "@/redux/slices/favoritesSlice";
import { RootState } from "@/redux/store";
import {
  HiHeart,
  HiOutlineArrowNarrowRight,
  HiOutlineHeart,
} from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  id?: string | number;
  title: string;
  description: string;
  action: string;
  category?: string;
  time?: string;
  image?: string;
  variant?: "default" | "primary";
  orientation?: "horizontal" | "vertical";
  className?: string;
  tending?: boolean | undefined;
}

export default function ContentCard({
  id,
  title,
  description,
  action,
  category,
  time,
  image,
  variant = "default",
  className,
  tending = false,
}: Props) {
  const dispatch = useDispatch<any>();
  
  const isPrimary = variant === "primary";
  const isMovie = category?.toLowerCase() === "movies";
  const isSocial = category?.toLowerCase() === "social";

  const isFavorite = useSelector((state: RootState) =>
    state.favorites.items.some((item: any) => item.id === id)
  );

  const displayImage = image || "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000&auto=format&fit=crop";

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(
      toggleFavorite({
        id,
        title,
        image: displayImage,
        description,
        category,
        time: time || "",
        type: category || "unknown",
      })
    );
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 h-[480px] w-full ${className} ${
        isPrimary
          ? "bg-indigo-600 border-indigo-500 shadow-indigo-200 dark:shadow-none"
          : "bg-white dark:bg-slate-800/50 border-slate-200/60 dark:border-slate-700/50 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none"
      }`}
    >
      {/* Favorite Button */}
      {!tending && (
        <button
          onClick={handleFavorite}
          className={`absolute z-30 p-2 rounded-full backdrop-blur-md border transition-all active:scale-90 right-4 ${
            isMovie || isSocial ? "top-14" : "top-4"
          } ${
            isPrimary || isMovie
              ? "bg-white/10 border-white/20 hover:bg-white/20 text-white"
              : "bg-slate-100/80 border-slate-200 hover:bg-slate-200 dark:bg-white/10 dark:border-white/20 text-slate-500 dark:text-white"
          }`}
        >
          {isFavorite ? <HiHeart className="w-5 h-5 text-red-500" /> : <HiOutlineHeart className="w-5 h-5" />}
        </button>
      )}

      <div className="flex flex-col h-full">
        {/* Image Section */}
        {!isSocial && (
          <div className={`relative overflow-hidden shrink-0 w-full transition-all duration-500 ${isMovie ? "absolute inset-0 h-full" : "h-48 lg:h-56"}`}>
            <img
              src={displayImage}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className={`absolute inset-0 ${isMovie ? "bg-gradient-to-t from-black/95 via-black/60 to-transparent" : "bg-black/5 md:bg-transparent"}`} />
          </div>
        )}

        {/* Content Section */}
        <div className={`flex-1 flex flex-col p-5 lg:p-6 z-20 ${isMovie ? "absolute inset-0 justify-end bg-transparent" : "relative justify-start"}`}>
          
          {/* Badge & Time */}
          <div className="flex items-center justify-between mb-4">
            {category && (
              <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md ${
                isPrimary || isMovie ? "bg-white/20 text-white backdrop-blur-sm" : "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
              }`}>
                {category}
              </span>
            )}
            {time && (
              <span className={`text-xs font-medium ${isPrimary || isMovie ? "text-indigo-100" : "text-slate-400"}`}>
                {time.split("•")[1]?.trim() || time}
              </span>
            )}
          </div>

          {/* Title & Description */}
          <div className={isMovie ? "mb-14" : "relative"}>
            <h3 className={`font-bold mb-2 leading-tight tracking-tight text-lg lg:text-xl line-clamp-2 ${isPrimary || isMovie ? "text-white" : "text-slate-900 dark:text-white"}`}>
              {title?.length > 40 ? `${title.substring(0, 40)}...` : title}
            </h3>
            <p className={`text-sm leading-relaxed ${
              isMovie ? "line-clamp-2" : isSocial ? "line-clamp-6" : "line-clamp-3"
            } ${isPrimary || isMovie ? "text-indigo-100/90" : "text-slate-500 dark:text-slate-400"}`}>
              {description?.length > 70 ? `${description.substring(0, 70)}...` : description}
            </p>
          </div>

          {/* Action Button */}
          <div className="mt-auto">
            <button className={`absolute bottom-5 left-5 flex items-center gap-2 text-sm font-bold transition-all active:scale-95 group/btn ${
              isPrimary || isMovie ? "text-white" : "text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
            }`}>
              <span className="group-hover/btn:mr-1 transition-all">{action}</span>
              <HiOutlineArrowNarrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}