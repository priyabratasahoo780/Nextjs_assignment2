export default function CoursesLoading() {
  return (
    <div className="space-y-6">
      <div className="h-6 w-32 bg-slate-200 dark:bg-slate-800 rounded animate-pulse"></div>
      <div className="h-10 w-72 bg-slate-200 dark:bg-slate-800 rounded animate-pulse"></div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-64 h-64 bg-slate-200 dark:bg-slate-800 rounded-xl animate-pulse hidden md:block"></div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-72 bg-slate-200 dark:bg-slate-800 rounded-xl animate-pulse"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
