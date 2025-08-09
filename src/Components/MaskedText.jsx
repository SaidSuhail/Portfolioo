// import React, { useRef } from "react";

// const MaskedText = ({ text }) => {
//   const spanRef = useRef(null);

//   const handleMouseMove = (e) => {
//     const rect = spanRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     spanRef.current.style.setProperty("--x", `${x}px`);
//     spanRef.current.style.setProperty("--y", `${y}px`);
//   };

//   return (
//     <span
//       ref={spanRef}
//       onMouseMove={handleMouseMove}
//       className="masked-text"
//     >
//       {text}
//     </span>
//   );
// };

// export default MaskedText;
