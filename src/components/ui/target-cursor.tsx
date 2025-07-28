
"use client";

import React, { useState, useEffect, useRef } from "react";
import "./target-cursor.css";

const TargetCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const moveCursor = (e: MouseEvent) => {
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };
    
    window.addEventListener("mousemove", moveCursor);

    const targets = document.querySelectorAll(".cursor-target");

    const enterHandler = (e: Event) => {
        const target = e.currentTarget as HTMLElement;
        const rect = target.getBoundingClientRect();
        const frame = frameRef.current;
        if(frame) {
            frame.style.width = `${rect.width}px`;
            frame.style.height = `${rect.height}px`;
            frame.style.top = `${rect.top}px`;
            frame.style.left = `${rect.left}px`;
        }
        setIsHovering(true);
    };

    const leaveHandler = () => {
        setIsHovering(false);
        const frame = frameRef.current;
        if (frame) {
            frame.style.width = `0px`;
            frame.style.height = `0px`;
        }
    };

    targets.forEach(target => {
      target.addEventListener("mouseenter", enterHandler);
      target.addEventListener("mouseleave", leaveHandler);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      targets.forEach(target => {
        target.removeEventListener("mouseenter", enterHandler);
        target.removeEventListener("mouseleave", leaveHandler);
      });
    };
  }, []);

  return (
    <div className="target-cursor-wrapper" style={{ opacity: isHovering ? 1 : 0 }}>
        <div ref={dotRef} className="target-cursor-dot-wrapper">
          <div className="target-cursor-dot" />
        </div>
        <div ref={frameRef} className="target-cursor-frame">
            <div className="target-cursor-corner corner-tl" />
            <div className="target-cursor-corner corner-tr" />
            <div className="target-cursor-corner corner-br" />
            <div className="target-cursor-corner corner-bl" />
        </div>
    </div>
  );
};

export default TargetCursor;
