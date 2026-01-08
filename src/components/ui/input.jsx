import React from "react";
import { cx } from "../../lib/utils";

export function Input({ className = "", ...props }) {
  return (
    <input
      className={cx(
        "w-full h-10 rounded-xl bg-zinc-800/50 border border-white/10 px-3 text-sm text-white outline-none focus:ring-0",
        className
      )}
      {...props}
    />
  );
}
