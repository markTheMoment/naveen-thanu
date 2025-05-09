import { useCallback, useEffect, useState, useRef } from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import "./Overlay.css";

export default function MobileSwiper({ onSwipe }) {
  const wrapperRef = useRef(null);
  // const [startX, setStartX] = useState(0)
  const [startY, setStartY] = useState(0);

  const handleTouchEnd = (e) => {
    if (!wrapperRef.current) {
      return;
    }
    const { height } = e.target.getBoundingClientRect();

    const endY = e.changedTouches[0].clientY;

    const yPercent = (endY / height) * 100;
    if (yPercent > wrapperRef.current.style.height) {
      wrapperRef.current.style.height = `${yPercent < 75 ? 0 : yPercent}%`;
    }
  };

  useEffect(() => {
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleTouchEnd]);

  return (
    <div ref={wrapperRef} className="overlay">
      <div className="iconStyle">
        <div className="displayName">Invitation</div>
        <KeyboardDoubleArrowUpIcon sx={{ color: "white" }} />
        <div className="font" style={{color:'white'}}>Swipe Up</div>
      </div>
    </div>
  );
}
