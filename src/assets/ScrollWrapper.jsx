import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const ScrollWrapper = ({ children }) => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      // Define your mobile breakpoint, e.g., 768px for Tailwind's 'md'
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const scrollElements = containerRef.current.querySelectorAll("[data-scroll-speed]");

      scrollElements.forEach(el => {
        const originalSpeed = parseFloat(el.getAttribute("data-scroll-speed"));

        let newSpeed = originalSpeed;
        if (isMobile) {
          newSpeed = originalSpeed * 0.5;
        }

        el.setAttribute("data-scroll-speed", newSpeed.toString());
      });

      const scroll = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        lerp: isMobile ? 0.05 : 0.1,
        multiplier: isMobile ? 0.5 : 1,
      });

      return () => {
        if (scroll) scroll.destroy();
      };
    }
  }, [isMobile]); 

  return (
    <div data-scroll-container ref={containerRef} className="p-0 scroll-smooth relative">
      {children}
    </div>
  );
};

export default ScrollWrapper;