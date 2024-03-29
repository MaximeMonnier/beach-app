import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Connexion from '../components/Connexion';

const Login_Register: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const elements = containerRef.current.children;
      gsap.fromTo(elements, 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.2, duration: 1 }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="h-screen flex items-center justify-center">
      <div className="bar h-40 w-2 bg-color-2 mx-15"></div>
      <Connexion />
    </div>
  );
}

export default Login_Register;



