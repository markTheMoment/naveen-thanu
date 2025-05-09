import { useEffect, useRef, useState } from "react";
import "./App.css";
import InvitationBody from "./InvitationBody/InvitationBody";
import Overlay from "./Overlay";
import MobileSwiper from "./MobileSwiper";

function App() {
  const overlayRef = useRef(null);

  return (
    <div className="body" ref={overlayRef}>
      <InvitationBody />
      {/* <Overlay overlayRef={overlayRef} /> */}
      <MobileSwiper/>
    </div>
  );
}

export default App;
