
"use client";

import { useEffect, useRef, useCallback, useMemo } from "react";
import { gsap } from "gsap";
import "./target-cursor.css";
import { useIsMobile } from "@/hooks/use-mobile";

export interface TargetCursorProps {
    targetSelector?: string;
    spinDuration?: number;
    hideDefaultCursor?: boolean;
}

const TargetCursor = ({
  targetSelector = ".cursor-target",
  spinDuration = 2,
  hideDefaultCursor = true,
}: TargetCursorProps) => {
  const isMobile = useIsMobile();
  const cursorRef = useRef<HTMLDivElement>(null);
  const cornersRef = useRef<NodeListOf<Element> | null>(null);
  const spinTl = useRef<gsap.core.Timeline | null>(null);
  const activeTargetRef = useRef<HTMLElement | null>(null);

  const constants = useMemo(
    () => ({
      borderWidth: 3,
      cornerSize: 12,
      parallaxStrength: 0.00005,
    }),
    []
  );

  const moveCursor = useCallback((x: number, y: number) => {
    if (!cursorRef.current) return;
    gsap.to(cursorRef.current, {
      x,
      y,
      duration: 0.1,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    if (isMobile || !cursorRef.current) return;

    const originalCursor = document.body.style.cursor;
    if (hideDefaultCursor) {
      document.body.style.cursor = 'none';
    }

    const cursor = cursorRef.current;
    cornersRef.current = cursor.querySelectorAll(".target-cursor-corner");

    let currentTargetMove: ((ev: MouseEvent) => void) | null = null;
    let currentLeaveHandler: (() => void) | null = null;
    let isAnimatingToTarget = false;
    let resumeTimeout: NodeJS.Timeout | null = null;

    const cleanupTarget = (target: HTMLElement) => {
      if (currentTargetMove) {
        target.removeEventListener("mousemove", currentTargetMove);
      }
      if (currentLeaveHandler) {
        target.removeEventListener("mouseleave", currentLeaveHandler);
      }
      currentTargetMove = null;
      currentLeaveHandler = null;
    };

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    const createSpinTimeline = () => {
      if (spinTl.current) {
        spinTl.current.kill();
      }
      spinTl.current = gsap
        .timeline({ repeat: -1 })
        .to(cursor, { rotation: "+=360", duration: spinDuration, ease: "none" });
    };

    createSpinTimeline();

    const moveHandler = (e: MouseEvent) => {
      if (!activeTargetRef.current) {
        moveCursor(e.clientX, e.clientY);
      }
    };
    window.addEventListener("mousemove", moveHandler);
    
    const updateCorners = (mouseX?: number, mouseY?: number) => {
        const target = activeTargetRef.current;
        if (!cursorRef.current || !cornersRef.current || !target) return;

        const rect = target.getBoundingClientRect();
        const cursorRect = cursorRef.current.getBoundingClientRect();

        const cursorCenterX = cursorRect.left + cursorRect.width / 2;
        const cursorCenterY = cursorRect.top + cursorRect.height / 2;

        const [tlc, trc, brc, blc] = Array.from(cornersRef.current as NodeListOf<HTMLElement>);

        const { borderWidth, cornerSize, parallaxStrength } = constants;

        let tlOffset = {
          x: rect.left - cursorCenterX - borderWidth,
          y: rect.top - cursorCenterY - borderWidth,
        };
        let trOffset = {
          x: rect.right - cursorCenterX + borderWidth - cornerSize,
          y: rect.top - cursorCenterY - borderWidth,
        };
        let brOffset = {
          x: rect.right - cursorCenterX + borderWidth - cornerSize,
          y: rect.bottom - cursorCenterY + borderWidth - cornerSize,
        };
        let blOffset = {
          x: rect.left - cursorCenterX - borderWidth,
          y: rect.bottom - cursorCenterY + borderWidth - cornerSize,
        };

        if (mouseX !== undefined && mouseY !== undefined) {
          const targetCenterX = rect.left + rect.width / 2;
          const targetCenterY = rect.top + rect.height / 2;
          const mouseOffsetX = (mouseX - targetCenterX) * parallaxStrength;
          const mouseOffsetY = (mouseY - targetCenterY) * parallaxStrength;

          tlOffset.x += mouseOffsetX;
          tlOffset.y += mouseOffsetY;
          trOffset.x += mouseOffsetX;
          trOffset.y += mouseOffsetY;
          brOffset.x += mouseOffsetX;
          brOffset.y += mouseOffsetY;
          blOffset.x += mouseOffsetX;
          blOffset.y += mouseOffsetY;
        }
        
        const tl = gsap.timeline();
        const corners = [tlc, trc, brc, blc];
        const offsets = [tlOffset, trOffset, brOffset, blOffset];

        corners.forEach((corner, index) => {
          tl.to(
            corner,
            {
              x: offsets[index].x,
              y: offsets[index].y,
              duration: 0.2,
              ease: "power2.out",
            },
            0
          );
        });
      };

    const scrollHandler = () => {
      if (activeTargetRef.current) {
        updateCorners();
      }
    };

    window.addEventListener("scroll", scrollHandler, { passive: true });

    const enterHandler = (e: Event) => {
      const directTarget = e.target as HTMLElement;
      const target = directTarget.closest(targetSelector) as HTMLElement | null;
      
      if (!target || !cursorRef.current || !cornersRef.current) return;
      if (activeTargetRef.current === target) return;
      if (activeTargetRef.current) {
        cleanupTarget(activeTargetRef.current);
      }

      if (resumeTimeout) {
        clearTimeout(resumeTimeout);
        resumeTimeout = null;
      }

      activeTargetRef.current = target;

      gsap.killTweensOf(cursorRef.current, "rotation");
      spinTl.current?.pause();
      gsap.set(cursorRef.current, { rotation: 0 });

      isAnimatingToTarget = true;
      updateCorners();

      setTimeout(() => {
        isAnimatingToTarget = false;
      }, 1);

      let moveThrottle: number | null = null;
      const targetMove = (ev: MouseEvent) => {
        moveCursor(ev.clientX, ev.clientY);
        if (moveThrottle || isAnimatingToTarget) return;
        moveThrottle = requestAnimationFrame(() => {
          updateCorners(ev.clientX, ev.clientY);
          moveThrottle = null;
        });
      };

      const leaveHandler = () => {
        if (!activeTargetRef.current) return;
        
        const oldTarget = activeTargetRef.current;
        activeTargetRef.current = null;
        isAnimatingToTarget = false;

        if (cornersRef.current) {
          const corners = Array.from(cornersRef.current as NodeListOf<HTMLElement>);
          gsap.killTweensOf(corners);

          const { cornerSize } = constants;
          const positions = [
            { x: -cornerSize * 1.5, y: -cornerSize * 1.5 },
            { x: cornerSize * 0.5, y: -cornerSize * 1.5 },
            { x: cornerSize * 0.5, y: cornerSize * 0.5 },
            { x: -cornerSize * 1.5, y: cornerSize * 0.5 },
          ];

          const tl = gsap.timeline();
          corners.forEach((corner, index) => {
            tl.to(
              corner,
              {
                x: positions[index].x,
                y: positions[index].y,
                duration: 0.3,
                ease: "power3.out",
              },
              0
            );
          });
        }

        resumeTimeout = setTimeout(() => {
          if (!activeTargetRef.current && cursorRef.current && spinTl.current) {
            const currentRotation = gsap.getProperty(cursorRef.current, "rotation") as number;
            const normalizedRotation = currentRotation % 360;

            spinTl.current.kill();
            spinTl.current = gsap
              .timeline({ repeat: -1 })
              .to(cursorRef.current, { rotation: "+=360", duration: spinDuration, ease: "none" });

            gsap.fromTo(cursorRef.current, 
              { rotation: normalizedRotation },
              {
                rotation: `+=${360 - normalizedRotation}`,
                duration: spinDuration * ((360 - normalizedRotation) / 360),
                ease: "none",
                onComplete: () => {
                  spinTl.current?.restart(true);
                },
              }
            );
          }
          resumeTimeout = null;
        }, 50);

        cleanupTarget(oldTarget);
      };

      currentTargetMove = targetMove;
      currentLeaveHandler = leaveHandler;

      target.addEventListener("mousemove", targetMove);
      target.addEventListener("mouseleave", leaveHandler);
    };

    document.addEventListener("mouseover", enterHandler, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      document.removeEventListener("mouseover", enterHandler);
      window.removeEventListener("scroll", scrollHandler);

      if (activeTargetRef.current) {
        cleanupTarget(activeTargetRef.current);
      }

      spinTl.current?.kill();
      document.body.style.cursor = originalCursor;
    };
  }, [isMobile, targetSelector, spinDuration, moveCursor, constants, hideDefaultCursor]);


  if (isMobile) {
    return null;
  }

  return (
    <div ref={cursorRef} className="target-cursor-wrapper">
      <div className="target-cursor-dot" />
      <div className="target-cursor-corner corner-tl" />
      <div className="target-cursor-corner corner-tr" />
      <div className="target-cursor-corner corner-br" />
      <div className="target-cursor-corner corner-bl" />
    </div>
  );
};

export default TargetCursor;
