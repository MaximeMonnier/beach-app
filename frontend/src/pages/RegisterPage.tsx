import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Register from "../components/Register";

const Login_Register: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const elements = containerRef.current.children;
      gsap.fromTo(
        elements,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 1 }
      );
    }
  }, []);

  return (
    <div className="bg-bg-5 dark:bg-bg-3">
      <div
        ref={containerRef}
        className="container-form h-screen flex items-center justify-center"
      >
        <Register />
      </div>
    </div>
  );
};

export default Login_Register;
