import React from "react";
import "./star-border.css";
import { cn } from "@/lib/utils";

const StarBorder = ({
  as: Component = "div",
  className = "",
  children,
  ...rest
}: {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}) => {
  return (
    <Component
      className={cn("star-border-container", className)}
      {...rest}
    >
      <div className="inner-content">{children}</div>
    </Component>
  );
};

export default StarBorder;
