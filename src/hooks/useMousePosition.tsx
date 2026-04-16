import { useEffect, useState } from "react";

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursor, setCursor] = useState("default");

  const handleMouseMove = (event: MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseOver = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.tagName === "A" || target.closest("a")) {
      setCursor("pointer");
    } else {
      setCursor("default");
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return {
    x: position.x,
    y: position.y,
    cursor,
  };
}
