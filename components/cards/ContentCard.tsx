import { HiOutlineArrowNarrowRight } from "react-icons/hi";

interface Props {
  title: string;
  description: string;
  action: string;
  category?: string;
  time?: string;
  image?: string;
  variant?: "default" | "primary";
}

export default function ContentCard({ 
  title, 
  description, 
  action, 
  category, 
  time, 
  image, 
  variant = "default" 
}: Props) {
  const isPrimary = variant === "primary";

  return (
    <div className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1
      ${isPrimary 
        ? "bg-indigo-600 border-indigo-500 shadow-xl shadow-indigo-200 dark:shadow-none" 
        : "bg-white dark:bg-slate-800/50 border-slate-200/60 dark:border-slate-700/50 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none"
      }`}>
      
      <div className={`flex flex-col md:flex-row h-full ${image ? "" : "p-6"}`}>
        {image && (
          <div className="relative w-full md:w-48 h-48 md:h-auto overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        )}

        <div className={`flex-1 flex flex-col p-6 ${image ? "md:p-6" : "p-0"}`}>
          <div className="flex items-center justify-between mb-3">
            {category && (
              <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md
                ${isPrimary ? "bg-white/20 text-white" : "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"}`}>
                {category}
              </span>
            )}
            {time && (
              <span className={`text-xs font-medium ${isPrimary ? "text-indigo-100" : "text-slate-400"}`}>
                {time}
              </span>
            )}
          </div>

          <h3 className={`text-xl font-bold mb-2 leading-tight tracking-tight
            ${isPrimary ? "text-white" : "text-slate-900 dark:text-white"}`}>
            {title}
          </h3>

          <p className={`text-sm leading-relaxed mb-6 line-clamp-2
            ${isPrimary ? "text-indigo-100/90" : "text-slate-500 dark:text-slate-400"}`}>
            {description}
          </p>

          <div className="mt-auto">
            <button className={`flex items-center gap-2 text-sm font-bold transition-all
              ${isPrimary 
                ? "text-white hover:gap-3" 
                : "text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:gap-3"}`}>
              {action}
              <HiOutlineArrowNarrowRight className="w-4 h-4" />
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