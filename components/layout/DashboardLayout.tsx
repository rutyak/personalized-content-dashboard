import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex flex-1 flex-col">
        <Header />

        <main className="p-6 flex-1 overflow-y-auto">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Dashboard
          </h1>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl bg-white dark:bg-gray-800 p-5 shadow">
              <p className="text-sm text-gray-500">Total News</p>
              <p className="text-2xl font-bold">120</p>
            </div>

            <div className="rounded-xl bg-white dark:bg-gray-800 p-5 shadow">
              <p className="text-sm text-gray-500">Recommendations</p>
              <p className="text-2xl font-bold">34</p>
            </div>

            <div className="rounded-xl bg-white dark:bg-gray-800 p-5 shadow">
              <p className="text-sm text-gray-500">Favorites</p>
              <p className="text-2xl font-bold">18</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}