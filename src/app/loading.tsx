export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-zinc-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zinc-900 dark:border-white mx-auto mb-4"></div>
        <p className="text-zinc-600 dark:text-zinc-400">Đang tải GameFlow...</p>
      </div>
    </div>
  );
}
