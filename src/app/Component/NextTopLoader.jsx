"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import nProgress from "nprogress";
import "nprogress/nprogress.css";

export default function NextTopLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // যখনই পাথ বা সার্চ প্যারাম চেঞ্জ হবে, লোডিং শেষ হবে
    nProgress.done();
    
    return () => {
      nProgress.start(); // পেজ চেঞ্জ শুরু হলে লোডিং শুরু হবে
    };
  }, [pathname, searchParams]);

  return null;
}