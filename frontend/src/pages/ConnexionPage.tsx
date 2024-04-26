import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Connexion from "../components/Connexion";

const ConnexionPage: React.FC = () => {
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
        className="h-screen flex items-center justify-center"
      >
        <Connexion />
      </div>
    </div>
  );
};

export default ConnexionPage;
