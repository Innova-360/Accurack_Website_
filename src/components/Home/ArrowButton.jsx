"use client";

import Button from "@/components/ui/Button/Button";

export function ArrowButton({ direction, onClick }) {
  const isLeft = direction === "left";
  return (
    <Button
      type="Button"
      onClick={onClick}
      aria-label={isLeft ? "Scroll left" : "Scroll right"}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 text-foreground/80 transition-colors hover:bg-foreground/5"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="stroke-current"
      >
        {isLeft ? (
          <path
            d="M15 6l-6 6 6 6"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M9 18l6-6-6-6"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </Button>
  );
}
