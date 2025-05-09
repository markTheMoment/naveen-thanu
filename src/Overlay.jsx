import { use, useEffect, useRef } from "react";
import "./Overlay.css";

const Overlay = ({overlayRef}) => {
  const divRef = useRef(null);

  
  useEffect(() => {

    if (divRef.current) {
      const handleScroll = (event) => {
        const { width, height } = event.target.getBoundingClientRect();
        const offsetX = event.offsetX;
        const offsetY = event.offsetY;
    
        const left = (offsetX / width) * 100;
        const top = (offsetY / height) * 100;
        divRef.current.style.top = `${top}%`;
      };
    
    
      overlayRef.current.addEventListener("touchmove", handleScroll);
      overlayRef.current.addEventListener("touchend", handleScroll);
    return () => {
      if (overlayRef.current) {
        overlayRef.current.removeEventListener("touchmove", handleScroll);
        overlayRef.current.removeEventListener("touchend", handleScroll);
      }
    };
  }
  }, []);

  return <div ref={divRef} className="overlay"></div>;
};

export default Overlay;
