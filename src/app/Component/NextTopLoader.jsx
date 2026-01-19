"use client";
import { useEffect } from "react";
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

export default function NextTopLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Start progress bar when navigation begins
    nProgress.start();

    // Complete progress bar when page loads
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
