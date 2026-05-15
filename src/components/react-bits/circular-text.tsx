"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: "slowDown" | "speedUp" | "pause" | "goBonkers";
  className?: string;
  radiusOffset?: number; // 원 바깥 여백 조절
}

const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
  radiusOffset = 10,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [radius, setRadius] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  const letters = useMemo(() => Array.from(text), [text]);

  useEffect(() => {
    if (!rootRef.current) return;

    const el = rootRef.current;

    const updateRadius = () => {
      const size = el.offsetWidth;
      setRadius(size / 2 - radiusOffset);
    };

    updateRadius();

    const observer = new ResizeObserver(() => {
      updateRadius();
    });

    observer.observe(el);

    return () => observer.disconnect();
  }, [radiusOffset]);

  const currentDuration = useMemo(() => {
    if (!isHovered) return spinDuration;

    switch (onHover) {
      case "slowDown":
        return spinDuration * 2;
      case "speedUp":
        return spinDuration / 4;
      case "pause":
        return 0;
      case "goBonkers":
        return spinDuration / 20;
      default:
        return spinDuration;
    }
  }, [isHovered, onHover, spinDuration]);

  const currentScale = isHovered && onHover === "goBonkers" ? 0.85 : 1;

  return (
    <motion.div
      ref={rootRef}
      className={twMerge(
        "pointer-events-none relative h-full w-full origin-center cursor-none rounded-full text-center font-black",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        rotate: currentDuration === 0 ? 0 : 360,
        scale: currentScale,
      }}
      transition={{
        rotate:
          currentDuration === 0
            ? { duration: 0 }
            : {
                duration: currentDuration,
                ease: "linear",
                repeat: Infinity,
              },
        scale: {
          type: "spring",
          damping: 20,
          stiffness: 300,
        },
      }}
      style={{ transformOrigin: "50% 50%" }}
    >
      {letters.map((letter, i) => {
        const rotationDeg = (360 / letters.length) * i;

        return (
          <span
            key={`${letter}-${i}`}
            className="absolute top-1/2 left-1/2 inline-block text-[10px] font-bold sm:text-xs md:text-sm lg:text-base"
            style={{
              transform: `
                translate(-50%, -50%)
                rotate(${rotationDeg}deg)
                translateY(-${radius}px)
              `,
              transformOrigin: "center",
            }}
          >
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;
