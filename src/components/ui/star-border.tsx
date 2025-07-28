import React from "react";
import "./star-border.css";
import { cn } from "@/lib/utils";

const StarBorder = ({
  as: Component = "div",
  className = "",
  color = "hsl(var(--primary))",
  speed = "4s",
  children,
  ...rest
}: {
  as?: React.ElementType;
  className?: string;
  color?: string;
  speed?: string;
  children: React.ReactNode;
  [key: string]: any;
}) => {
  return (
    <Component
      className={cn("star-border-container", className)}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 40%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 40%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className="inner-content">{children}</div>
    </Component>
  );
};

export default StarBorder;
