// import React, { useEffect, useState } from "react";

// function BubbleCursor() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const move = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//       setVisible(true);
//     };

//     const leave = () => setVisible(false);

//     window.addEventListener("mousemove", move);
//     window.addEventListener("mouseleave", leave);

//     return () => {
//       window.removeEventListener("mousemove", move);
//       window.removeEventListener("mouseleave", leave);
//     };
//   }, []);

//   return (
//     <div
//       className="pointer-events-none fixed z-50 w-8 h-8 bg-blue-500 opacity-30 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-in-out"
//       style={{
//         top: `${position.y}px`,
//         left: `${position.x}px`,
//         opacity: visible ? 0.3 : 0,
//       }}
//     ></div>
//   );
// }

// export default BubbleCursor;

import React, { useEffect, useRef } from "react";

const BubbleCursor = () => {
  const bubbleRef = useRef(null);

  useEffect(() => {
    const bubble = bubbleRef.current;
    const navbar = document.getElementById("navbar-area");

const handleMouseMove = (e) => {
  const rect = navbar.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Move bubble
  bubble.style.display = "block";
  bubble.style.transform = `translate(${x}px, ${y}px)`;

  // Apply bubble position to masked text
  document.querySelectorAll(".masked-text").forEach((el) => {
    const elRect = el.getBoundingClientRect();
    const localX = e.clientX - elRect.left;
    const localY = e.clientY - elRect.top;
    el.style.setProperty("--x", `${localX}px`);
    el.style.setProperty("--y", `${localY}px`);
  });
};

    const handleMouseLeave = () => {
      bubble.style.display = "none";
    };

    if (navbar) {
      navbar.addEventListener("mousemove", handleMouseMove);
      navbar.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (navbar) {
        navbar.removeEventListener("mousemove", handleMouseMove);
        navbar.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={bubbleRef}
      className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-30 pointer-events-none transition-transform duration-300 ease-out backdrop-blur-sm"
      style={{
        top: 0,
        left: 0,
        transform: "translate(-9999px, -9999px)", // initially out of view
      }}
    ></div>
  );
};

export default BubbleCursor;
