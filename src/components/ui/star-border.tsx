import React from "react";
import "./star-border.css";

const StarBorder = ({
  as: Component = "button",
  className = "",
  color = "white",
  speed = "6s",
  thickness = 1,
  children,
  ...rest
}: {
  as?: React.ElementType;
  className?: string;
  color?: string;
  speed?: string;
  thickness?: number;
  children: React.ReactNode;
  [key: string]: any;
}) => {
  return (
    <Component
      className={`star-border-container ${className}`}
      style={{
        padding: `${thickness}px`,
        ...rest.style,
      }}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className="inner-content">{children}</div>
    </Component>
  );
};

export default StarBorder;
