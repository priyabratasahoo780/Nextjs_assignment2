export default function LessonLoading() {
  return (
    <div className="flex-1 flex flex-col md:flex-row h-full animate-pulse">
      <div className="flex-1 p-6 space-y-4">
        <div className="aspect-video w-full bg-slate-900 rounded-xl"></div>
        <div className="h-8 w-1/2 bg-slate-800 rounded"></div>
        <div className="h-24 w-full bg-slate-900 rounded"></div>
      </div>
      <div className="w-full md:w-80 border-t md:border-t-0 md:border-l border-slate-800 p-4 space-y-3 bg-slate-900/50">
        <div className="h-6 w-3/4 bg-slate-800 rounded mb-4"></div>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-10 bg-slate-800 rounded"></div>
        ))}
      </div>
    </div>
  );
}
