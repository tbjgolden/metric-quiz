import { useState, useEffect } from "react";
import Confetti from "react-confetti";

export default () => {
  const [hasInit, setHasInit] = useState(false);
  const [width, setWidth] = useState(globalThis?.innerWidth ?? 1000);
  const [height, setHeight] = useState(globalThis?.innerHeight ?? 1000);

  const ws = useWindowSize();
  useEffect(() => {
    setWidth(ws.width);
  }, [ws.width]);
  useEffect(() => {
    setHeight(ws.height);
  }, [ws.height]);

  return (
    <div
      id="confetti"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999,
        pointerEvents: hasInit ? "none" : "all",
      }}
      onMouseMove={() => {
        if (!hasInit) {
          setWidth(globalThis?.innerWidth ?? 1000);
          setHeight(globalThis?.innerHeight ?? 1000);
          setHasInit(true);
        }
      }}
    >
      <Confetti width={width} height={height} numberOfPieces={400} />
    </div>
  );
};

function useWindowSize() {
  let window = globalThis;
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window?.innerWidth,
        height: window?.innerHeight,
      });
    }

    // Add event listener
    window?.addEventListener?.("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window?.removeEventListener?.("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
