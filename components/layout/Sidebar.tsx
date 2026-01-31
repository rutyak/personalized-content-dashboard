import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 flex-col bg-white dark:bg-gray-800 border-r">
      <div className="p-6 font-bold text-xl">Dashboard</div>

      <nav className="flex-1 px-4 space-y-2">
        <Link href="/dashboard" className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          Home
        </Link>
        <Link href="/favorites" className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          Favorites
        </Link>
        <Link href="/settings" className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          Settings
        </Link>
      </nav>
    </aside>
  );
}