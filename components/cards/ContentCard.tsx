import { HiOutlineArrowNarrowRight } from "react-icons/hi";

interface Props {
  title: string;
  description: string;
  action: string;
  category?: string;
  time?: string;
  image?: string;
  variant?: "default" | "primary";
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export default function ContentCard({
  title,
  description,
  action,
  category,
  time,
  image,
  variant = "default",
  className,
}: Props) {
  const isPrimary = variant === "primary";
  const isMovie = category?.toLowerCase() === "movies";
  const isSocial = category?.toLowerCase() === "social";

  const defaultImage =
    "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000&auto=format&fit=crop";
  const displayImage = image || defaultImage;

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 shadow-xl hover:-translate-y-1 h-[450px] w-full ${className}
      ${
        isPrimary
          ? "bg-indigo-600 border-indigo-500 shadow-indigo-200 dark:shadow-none"
          : "bg-white dark:bg-slate-800/50 border-slate-200/60 dark:border-slate-700/50 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none"
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Image Section */}
        {!isSocial && (
          <div
            className={`relative overflow-hidden shrink-0 w-full transition-all duration-500
            ${isMovie ? "absolute inset-0 h-full" : "h-48 lg:h-56"}`}
          >
            <img
              src={displayImage}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {isMovie && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />
            )}
            {!isMovie && (
              <div className="absolute inset-0 bg-black/5 md:bg-transparent" />
            )}
          </div>
        )}

        {/* Text Content Area */}
        <div
          className={`flex-1 flex flex-col p-4 sm:p-5 lg:p-6 z-20
          ${isMovie ? "absolute inset-0 justify-end bg-transparent" : "relative justify-start"}`}
        >
          <div className="flex items-center justify-between mb-3">
            {category && (
              <span
                className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md
                ${isPrimary || isMovie ? "bg-white/20 text-white backdrop-blur-sm" : "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"}`}
              >
                {category}
              </span>
            )}
            {time && (
              <span
                className={`text-xs font-medium ${isPrimary || isMovie ? "text-indigo-100" : "text-slate-400"}`}
              >
                {time}
              </span>
            )}
          </div>

          <div className={isMovie ? "absolute bottom-16" : "relative"}>
            <h3
              className={`font-bold mb-2 leading-tight tracking-tight text-lg lg:text-xl line-clamp-2
            ${isPrimary || isMovie ? "text-white" : "text-slate-900 dark:text-white"}`}
            >
              {title}
            </h3>

            <p
              className={`text-sm leading-relaxed mb-4 
            ${isMovie ? "line-clamp-2" : isSocial ? "line-clamp-6" : "line-clamp-3"}
            ${isPrimary || isMovie ? "text-indigo-100/90" : "text-slate-500 dark:text-slate-400"}`}
            >
              {description}
            </p>
          </div>

          <div className="mt-auto pt-2">
            <button
              className={`flex items-center gap-2 text-sm font-bold transition-all active:scale-95
              ${
                isPrimary || isMovie
                  ? "text-white hover:gap-3"
                  : "text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:gap-3"
              }`}
            >
              {action}
              <HiOutlineArrowNarrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
