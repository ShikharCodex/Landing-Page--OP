import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* 
        Clean, scalable SVG recreation of the uploaded geometric "OP" logo.
        It uses stroke="currentColor" so it perfectly adapts to light/dark themes.
      */}
      <svg
        viewBox="0 0 100 100"
        className="h-8 w-auto text-foreground shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="square"
        strokeLinejoin="miter"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* The 'O' - a 3/4 circle */}
        <path d="M 75 45 A 30 30 0 1 0 45 75" />

        {/* The 'P' stem */}
        <path d="M 45 45 L 45 95" />

        {/* The 'P' bowl */}
        <path d="M 45 45 L 60 45 A 15 15 0 0 1 60 75 L 45 75" />
      </svg>

      {showText && (
        <span className="font-semibold tracking-[0.25em] text-foreground uppercase text-sm mt-1">
          OpenPrompt
        </span>
      )}
    </div>
  );
}
