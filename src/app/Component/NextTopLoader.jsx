"use client";
import { useEffect, Suspense } from "react"; // Suspense ইমপোর্ট করুন
import { usePathname, useSearchParams } from "next/navigation";
import nProgress from "nprogress";
import "nprogress/nprogress.css";

// Configure nprogress
nProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.08,
  easing: "ease",
  speed: 500,
});

// মূল লজিকটি আলাদা একটি ছোট কম্পোনেন্টে নিয়ে যান
function LoaderHandler() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    nProgress.start();

    const timer = setTimeout(() => {
      nProgress.done();
    }, 100);

    return () => {
      clearTimeout(timer);
      nProgress.done();
    };
  }, [pathname, searchParams]);

  return null;
}

// এই মেইন কম্পোনেন্টটি এখন নিরাপদ (Build Safe)
export default function NextTopLoader() {
  return (
    <Suspense fallback={null}>
      <LoaderHandler />
    </Suspense>
  );
}