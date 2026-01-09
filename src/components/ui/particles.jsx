import React from "react";

export default function Particles({ variant = "purple" }) {
  const dotClass = variant === "white" ? "bg-white" : "bg-purple-200";

  return (
    <>
      <span
        aria-hidden="true"
        className={`absolute top-1 left-2 w-0.5 h-0.5 ${dotClass} rounded-full animate-pulse pointer-events-none z-0`}
      />
      <span
        aria-hidden="true"
        className={`absolute bottom-1 right-2 w-0.5 h-0.5 ${dotClass} rounded-full animate-pulse delay-300 pointer-events-none z-0`}
      />
      <span
        aria-hidden="true"
        className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-white rounded-full animate-ping duration-[1.5s] pointer-events-none z-0"
      />
    </>
  );
}
