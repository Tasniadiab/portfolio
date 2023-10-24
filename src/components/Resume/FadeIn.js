import React, { useState, useRef, useEffect } from "react";
import "./FadeInSection.scss";

export default function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        if (!isVisible) {
          setVisible(true);
          observer.unobserve(domRef.current); // Check this line for potential issues
        }
      }
    });

    observer.observe(domRef.current);

    return () => {
      if (!isVisible) {
        observer.unobserve(domRef.current); // Also check this line for issues
      }
    };
  }, [isVisible]);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      {props.children}
    </div>
  );
}
