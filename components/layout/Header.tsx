export default function Header() {
  return (
    <header className="h-16 bg-white dark:bg-gray-800 border-b flex items-center justify-between px-6">
      <input
        type="text"
        placeholder="Search news, movies, posts..."
        className="w-1/2 px-4 py-2 rounded border dark:bg-gray-700 dark:border-gray-600"
      />

      <div className="flex items-center gap-4">
        <button className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700">
          Dark
        </button>
        <div className="w-8 h-8 rounded-full bg-gray-400" />
      </div>
    </header>
  );
}