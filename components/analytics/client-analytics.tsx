"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ClientAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    console.log("Analytics event: ", pathname, searchParams.toString());
  }, [pathname, searchParams]);

  return null;
}
