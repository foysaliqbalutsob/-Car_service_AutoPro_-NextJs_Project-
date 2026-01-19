
"use client";

import { useLoadingStore } from "../api/Store/useUserStore";


export default function GlobalLoader() {
  const isLoading = useLoadingStore((state) => state.isLoading);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-2">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="text-sm font-bold">Loading...</p>
      </div>
    </div>
  );
}