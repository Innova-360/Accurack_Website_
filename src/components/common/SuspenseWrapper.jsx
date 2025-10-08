"use client";

import { Suspense } from "react";

export default function SuspenseWrapper({ children, fallback }) {
  return (
    <Suspense
      fallback={
        fallback || (
          <div className="w-full flex justify-center items-center py-10">
            <div className="animate-pulse w-[200px] h-[120px] bg-gray-100 rounded-lg" />
          </div>
        )
      }
    >
      {children}
    </Suspense>
  );
}
