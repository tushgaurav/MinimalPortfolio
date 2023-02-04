import React, { useEffect } from "react";
import gsap, { Power3 } from "gsap";

function Heading(props) {
  // Animations
  // useEffect(() => {
  //   gsap.to(".Heading", {
  //     // x: "-2em",
  //     rotation: 0,
  //     opacity: 1,
  //     duration: 1.4,
  //     ease: Power3.easeOut,
  //   });
  // }, []);

  return (
    <div className="Heading">
      <h1>{props.text}</h1>
    </div>
  );
}

export default Heading;
