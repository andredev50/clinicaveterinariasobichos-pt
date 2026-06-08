import type React from "react";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[1rem] border border-border bg-white shadow-soft transition-shadow hover:shadow-card hover:-translate-y-0.5 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
