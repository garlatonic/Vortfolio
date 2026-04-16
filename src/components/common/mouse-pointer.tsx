"use client";

import { useMousePosition } from "@/hooks/useMousePosition";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

export default function MousePointer() {
  const { x, y, cursor } = useMousePosition();

  const dotRef = useRef<HTMLDivElement>(null);
  const dotPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);
  const targetScaleRef = useRef(1);

  useEffect(() => {
    targetScaleRef.current = cursor === "pointer" ? 1.5 : 1;
  }, [cursor]);

  useEffect(() => {
    const animate = () => {
      const lerp = 0.2;

      dotPos.current.x += (x - dotPos.current.x) * lerp;
      dotPos.current.y += (y - dotPos.current.y) * lerp;

      if (dotRef.current) {
        const tx = dotPos.current.x - x;
        const ty = dotPos.current.y - y;
        dotRef.current.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId.current);
  }, [x, y]);

  useEffect(() => {
    document.body.style.cursor = "none";
    return () => {
      document.body.style.cursor = "default";
    };
  }, []);

  return (
    <div
      style={{ left: x, top: y }}
      className={twMerge(
        "pointer fixed size-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white pointer-events-none mix-blend-difference transition-[width,height] duration-150 ease-out z-50",
        cursor === "pointer" && "size-10",
      )}
    >
      <div
        ref={dotRef}
        className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-white/90 pointer-events-none"
      />
    </div>
  );
}
