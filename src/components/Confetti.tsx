import { useState, useEffect } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
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
