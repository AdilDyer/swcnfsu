// "use client";
// import { useState, useEffect } from "react";

// export default function useWindowSize() {
//   function getSize() {
//     return {
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };
//   }

//   const [windowSize, setWindowSize] = useState(getSize);

//   useEffect(() => {
//     function handleResize() {
//       setWindowSize(getSize());
//     }

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return windowSize;
// }

"use client";
import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function getSize() {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }

    // Set initial size
    setWindowSize(getSize());

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
