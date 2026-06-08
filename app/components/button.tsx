import type React from "react";

export default function Button({
  variant,
  size = "md",
  href,
  onClick,
  leftIconSrc,
  children,
  className,
  type = "button",
}: {
  variant: "solid" | "outline";
  size?: "md" | "lg";
  href?: string;
  onClick?: () => void;
  leftIconSrc?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-heading font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";
  const sizeClasses =
    size === "lg"
      ? "rounded-[9999px] px-6 py-3 text-sm md:text-base"
      : "rounded-[9999px] px-5 py-2.5 text-sm";
  const variantClasses =
    variant === "solid"
      ? "bg-primary text-white hover:bg-primary-hover"
      : "border border-primary text-primary hover:bg-primary/5";

  const cls = `${base} ${sizeClasses} ${variantClasses} ${className ?? ""}`;

  if (href) {
    return (
      <a href={href} className={cls}>
        {leftIconSrc && (
          <img src={leftIconSrc} alt="" className="h-4 w-4" aria-hidden="true" />
        )}
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {leftIconSrc && (
        <img src={leftIconSrc} alt="" className="h-4 w-4" aria-hidden="true" />
      )}
      {children}
    </button>
  );
}
