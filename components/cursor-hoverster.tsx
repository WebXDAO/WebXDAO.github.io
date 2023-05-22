'use client';
import { useEffect } from "react";

export default function CursorHoverster() {
  useEffect(() => {
    const cursor = document.querySelector('.c-pointer') as HTMLDivElement;

    const positionElement = (e: MouseEvent) => {
        let mousex = e.clientX;
        let mousey = e.clientY;

        cursor.animate(
            {
              left: mousex + "px",
              top: mousey + "px"
            },
            {
              duration: 500,
              fill: "forwards"
            }
          );
    }

    window.addEventListener('mousemove', positionElement);

    return () => {
      window.removeEventListener('mousemove', positionElement);
    }
  }, []);

  return (
    <div className="c-pointer"></div>
  )
}
