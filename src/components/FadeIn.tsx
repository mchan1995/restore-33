
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

type FadeInProps = {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: string;
  delay?: string;
  className?: string;
  threshold?: number;
  once?: boolean;
  distance?: string;
};

export function FadeIn({
  children,
  direction = "up",
  duration = "700ms",
  delay = "0ms",
  className = "",
  threshold = 0.1,
  once = true,
  distance = "20px",
}: FadeInProps) {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold,
  });

  const getTransform = () => {
    switch (direction) {
      case "up":
        return `translateY(${distance})`;
      case "down":
        return `translateY(-${distance})`;
      case "left":
        return `translateX(${distance})`;
      case "right":
        return `translateX(-${distance})`;
      default:
        return "none";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : getTransform(),
        transition: `opacity ${duration} ease-out ${delay}, transform ${duration} ease-out ${delay}`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

export function FadeInStagger({
  children,
  containerClassName = "",
  childClassName = "",
  childDelay = 100,
  ...props
}: FadeInProps & {
  containerClassName?: string;
  childClassName?: string;
  childDelay?: number;
}) {
  return (
    <div className={containerClassName}>
      {React.Children.map(children, (child, i) => (
        <FadeIn
          {...props}
          delay={`${Number(props.delay?.replace("ms", "") || 0) + i * childDelay}ms`}
          className={childClassName}
          key={i}
        >
          {child}
        </FadeIn>
      ))}
    </div>
  );
}
