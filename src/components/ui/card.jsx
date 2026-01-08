import React from "react";
import { cx } from "../../lib/utils";

export function Card({ className = "", children }) {
  return <div className={cx("rounded-3xl border bg-zinc-900/50 border-white/10", className)}>{children}</div>;
}

export function CardHeader({ className = "", children }) {
  return <div className={cx("p-5 border-b border-white/5", className)}>{children}</div>;
}

export function CardContent({ className = "", children }) {
  return <div className={cx("p-5", className)}>{children}</div>;
}

export function CardFooter({ className = "", children }) {
  return <div className={cx("p-5 border-t border-white/5 flex items-center gap-3", className)}>{children}</div>;
}

export function CardTitle({ className = "", children }) {
  return <div className={cx("text-base font-semibold", className)}>{children}</div>;
}

export function CardDescription({ className = "", children }) {
  return <div className={cx("text-xs text-zinc-400", className)}>{children}</div>;
}
