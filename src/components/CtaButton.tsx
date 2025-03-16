
import React from "react";
import { cn } from "@/lib/utils";

interface CtaButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "subtle";
  size?: "sm" | "md" | "lg" | "xl";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  href?: string;
}

export function CtaButton({
  children,
  onClick,
  className,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  disabled = false,
  loading = false,
  type = "button",
  href,
}: CtaButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-medium tracking-tight transition-all duration-300 ease-out rounded-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2";

  const variantStyles = {
    primary:
      "bg-brand-500 text-white hover:bg-brand-600 active:bg-brand-700 shadow-sm hover:shadow",
    secondary:
      "bg-white text-neutral-800 border border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300 active:bg-neutral-100 shadow-sm hover:shadow",
    outline:
      "bg-transparent text-brand-600 border border-brand-200 hover:bg-brand-50 hover:border-brand-300 active:bg-brand-100",
    ghost:
      "bg-transparent text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200",
    subtle:
      "bg-brand-50 text-brand-700 hover:bg-brand-100 active:bg-brand-200",
  };

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2 gap-2",
    lg: "text-base px-5 py-2.5 gap-2.5",
    xl: "text-lg px-6 py-3 gap-3",
  };

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "";

  const loadingStyles = loading
    ? "opacity-90 pointer-events-none"
    : "";

  const buttonContent = (
    <>
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center animate-pulse-subtle">
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </span>
      )}
      <span className={loading ? "invisible" : ""}>
        {iconPosition === "left" && icon && (
          <span className="flex-shrink-0">{icon}</span>
        )}
        {children}
        {iconPosition === "right" && icon && (
          <span className="flex-shrink-0">{icon}</span>
        )}
      </span>
    </>
  );

  const combinedClassName = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    disabledStyles,
    loadingStyles,
    className
  );

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {buttonContent}
    </button>
  );
}
