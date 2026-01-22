import React from "react";
import { cx } from "../../lib/utils";

export function Button({ asChild, variant = "default", size = "md", className = "", children, ...props }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium transition shadow-sm border";
  const variants = {
    default: "bg-white text-black border-white/10 hover:bg-zinc-100",
    outline: "bg-transparent text-white border-white/20 hover:bg-white/5",
    ghost: "bg-transparent text-white border-transparent hover:bg-white/5",
    secondary: "bg-zinc-800 text-white border-white/10 hover:bg-zinc-700",
  };
  const sizes = {
    md: "h-10",
    sm: "h-9 px-3",
    icon: "h-12 w-12 p-2",
  };
  const cls = cx(base, variants[variant] || variants.default, sizes[size] || sizes.md, className);

  // Se for asChild e a criança for elemento válido, clonamos e injetamos classes
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { className: cx(children.props.className || "", cls), ...props });
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
