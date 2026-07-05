"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const moveCursor = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("pointermove", moveCursor);

    return () => window.removeEventListener("pointermove", moveCursor);
  }, []);

  return (
    <>
      <div
        className="cursorGlow"
        style={{
          transform: `translate3d(${position.x - 29}px, ${
            position.y - 29
          }px, 0)`,
        }}
      />

      <div
        className="cursorDot"
        style={{
          transform: `translate3d(${position.x - 4}px, ${
            position.y - 4
          }px, 0)`,
        }}
      />
    </>
  );
}