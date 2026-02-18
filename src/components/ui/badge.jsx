import React from "react";
import { cx } from "../../utils/utils";

export function Badge({ className = "", children, ...props }) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border border-white/10",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
