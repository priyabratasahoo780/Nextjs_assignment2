export default function CourseDetailLoading() {
  return (
    <div className="space-y-8 animate-pulse">
      <div className="h-6 w-48 bg-slate-200 dark:bg-slate-800 rounded"></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="h-10 w-3/4 bg-slate-200 dark:bg-slate-800 rounded"></div>
          <div className="h-20 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
          <div className="h-64 w-full bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
        </div>
        <div className="h-80 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
      </div>
    </div>
  );
}
