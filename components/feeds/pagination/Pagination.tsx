"use client";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, setCurrentPage }: PaginationProps) => {
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(i);
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pages.push("...");
      }
    }
    return [...new Set(pages)]; // Remove duplicates if any
  };

  return (
    <div className="flex items-center justify-center gap-2 py-10 mt-8 border-t border-slate-100 dark:border-slate-800">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95"
      >
        <HiChevronLeft className="w-6 h-6" />
      </button>

      <div className="flex items-center gap-1">
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            disabled={page === "..."}
            onClick={() => typeof page === "number" && handlePageChange(page)}
            className={`w-11 h-11 rounded-xl text-sm font-bold transition-all ${
              currentPage === page
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-none"
                : page === "..."
                ? "cursor-default text-slate-400"
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-90"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95"
      >
        <HiChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Pagination;