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
}

export default function ContentCard({
  title,
  description,
  action,
  category,
  time,
  image,
  variant = "default",
  orientation = "horizontal",
}: Props) {
  const isPrimary = variant === "primary";
  const isVertical = orientation === "vertical";

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 shadow-xl hover:-translate-y-1 h-full
      ${
        isPrimary
          ? "bg-indigo-600 border-indigo-500 shadow-indigo-200 dark:shadow-none"
          : "bg-white dark:bg-slate-800/50 border-slate-200/60 dark:border-slate-700/50 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none"
      }`}
    >
      <div
        className={`flex flex-col h-full ${!isVertical ? "md:flex-row" : ""}`}
      >
        {image && (
          <div
            className={`relative overflow-hidden shrink-0 
            ${
              isVertical
                ? "w-full h-48 lg:h-56"
                : "w-full md:w-48 lg:w-64 h-48 md:h-auto"
            }`}
          >
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/5 md:bg-transparent" />
          </div>
        )}

        <div
          className={`flex-1 flex flex-col p-3 sm:p-4  ${isVertical ? "lg:p-6" : "lg:p-6"}`}
        >
          <div className="flex items-center justify-between mb-4">
            {category && (
              <span
                className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md
                ${isPrimary ? "bg-white/20 text-white" : "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"}`}
              >
                {category}
              </span>
            )}
            {time && (
              <span
                className={`text-xs font-medium ${isPrimary ? "text-indigo-100" : "text-slate-400"}`}
              >
                {time}
              </span>
            )}
          </div>

          <h3
            className={`font-bold mb-2 sm:mb-3 leading-tight tracking-tight
            ${isVertical ? "text-lg lg:text-xl" : "text-lg sm:text-xl lg:text-2xl"}
            ${isPrimary ? "text-white" : "text-slate-900 dark:text-white"}`}
          >
            {title}
          </h3>

          <p
            className={`text-sm leading-relaxed mb-6 line-clamp-2 sm:line-clamp-3
            ${isPrimary ? "text-indigo-100/90" : "text-slate-500 dark:text-slate-400"}`}
          >
            {description}
          </p>

          <div className="mt-auto pt-2">
            <button
              className={`flex items-center gap-2 text-sm font-bold transition-all active:scale-95
              ${
                isPrimary
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

      {isPrimary && (
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/0 via-white/5 to-white/0" />
      )}
    </div>
  );
}
