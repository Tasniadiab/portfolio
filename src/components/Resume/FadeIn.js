import React, { useState, useRef, useEffect } from "react";
import "./FadeInSection.scss";

export default function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // In your case there's only one element to observe:
      if (entries[0].isIntersecting) {
        // Not possible to set it back to false like this:
        if (!isVisible) {
            setVisible(true);
            // No need to keep observing:
            observer.unobserve(domRef.current);
          }
        }
      });

    observer.observe(domRef.current);

    return () => {
        // Add a condition to avoid unobserving if it's already visible:
        if (!isVisible) {
          observer.unobserve(domRef.current);
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
